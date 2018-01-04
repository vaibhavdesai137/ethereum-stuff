$(function() {
    $(window).load(function() {
        App.init();
    });
});

// Blocker waiting for metamask to fetch txn receipt
var blockUiOptions = {
    message: '<h3>Please wait...</h5><img height="100" width="150" src="images/blockchain-loader.gif" />',
    fadeIn: 700,
    fadeOut: 700,
    css: {
        border: 'none',
        backgroundColor: '#000',
        '-webkit-border-radius': '5px',
        '-moz-border-radius': '5px',
        opacity: .5,
        color: '#fff',
        padding: '10px'
    }
};

App = {

    web3Provider: null,
    contracts: {},
    account: null,
    loading: false,
    warned: false,
    networkId: '',
    networkName: '',
    etherscanEndpoint: '',
    seenListItemEvents: [],
    seenBuyItemEvents: [],

    init: function() {
        App.initWeb3();
    },

    // Set web3 provider for the app
    initWeb3: function() {

        // Check if we already have a web3 object injected
        // MIST/MetaMask would do this
        // If not, set our own provider
        // Could be testrpc or any provider
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
            web3 = new Web3(App.web3Provider);
        }

        App.getNetworkInfo();
    },

    // Get network
    getNetworkInfo: function() {

        web3.version.getNode(function(err, node) {

            if (err) {
                alert("Unable to detect any network");
            }

            $('#node').html(node);
        });

        web3.version.getNetwork(function(err, netId) {

            App.networkId = netId;

            switch (App.networkId) {
                case "1":
                    App.networkName = 'Mainnet';
                    break;
                case "2":
                    App.networkName = 'Morden Test Network (Deprecated)';
                    break;
                case "3":
                    App.networkName = 'Ropsten Test Network';
                    break;
                case "4":
                    App.networkName = 'Rinkeby Test Network';
                    break;
                case "42":
                    App.networkName = 'Kovan Test Network';
                    break;
                default:
                    App.networkName = netId;
                    console.log('This is an unknown network for netId: ' + netId);
            }

            // Update account info once we know what network we are on
            $('#network').html(App.networkName);
            App.getAccountInfo();
        });
    },

    // Get the coinbase account and its balance to render on the UI
    // web3 does not have promises thats why using callbacks
    getAccountInfo: function() {

        // Get account info
        web3.eth.getCoinbase(function(err, account) {

            if ((err || !account) && !App.warned) {
                App.warned = true;
                alert("Unable to fetch account info. Please ensure accounts are unlocked.");
            }

            App.account = account;
            $('#account').html(App.getEtherscanAnchorTag('address', account));

            // Get account balance
            web3.eth.getBalance(account, function(err, balance) {
                if (err == null) {
                    accountBalanceInEther = web3.fromWei(balance, "ether");
                    $('#accountBalance').text(accountBalanceInEther + " ETH");
                }
            });

            // Init the contract since network and account info is all set
            return App.initContract();
        });
    },

    // Initialize our Craigslist json
    // Remember, the artifact (json) file is created by truffle during "truffle migrate"
    initContract: function() {

        // Craigslist.json is under build/contracts/Craigslist.json
        // The following works from "src" dir because of the browser-sync pkg that truffle uses
        // This is configured in bs-config.json
        // "baseDir": ["./src", "./build/contracts"]
        // This tells the lite server to look in both those directories for a requested file
        $.getJSON('Craigslist.json', function(craigslistArtifact) {

            // Use truffle to get contarct object by passing the atrifact file
            // We can attach multiple contracts to App.contracts
            App.contracts.Craigslist = TruffleContract(craigslistArtifact);

            // Set the provider for our contract
            App.contracts.Craigslist.setProvider(App.web3Provider);

            // Attach event listeners
            App.eventListeners();

            // Load ll items from contract
            return App.reloadItems();
        });
    },

    // Load items on sale from the contract
    reloadItems: function() {

        // No need to bombard our blockchain
        if (App.loading) {
            return;
        }
        App.loading = true;

        // Balance may have changed
        App.getAccountInfo();

        // truffle uses promises
        // same can be done using callbacks too
        var contractInstance;
        App.contracts.Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return instance.getItemsOnSale.call();
        }).then(function(itemIds) {

            // Clear existing items
            var itemsRow = $('#itemsRow');
            itemsRow.empty();

            if (itemIds.length === 0) {
                $('#nothingOnSaleDiv').show();
            } else {

                // Query details for each id and update the UI
                for (var i = 0; i < itemIds.length; i++) {

                    // Weird bug in metamask that causes conversion error
                    // Explicitly convert since our contract is expecting a uint
                    var itemId = itemIds[i].toNumber();
                    contractInstance.items.call(itemId).then(function(item) {
                        App.displayItem(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7]);
                    });
                }
            }
            return contractInstance.itemCount.call();
        }).then(function(data) {
            $('#itemListedCount').html(data.toNumber());
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            $('#itemBoughtCount').html(data.toNumber());
            App.loading = false;
        }).catch(function(err) {
            App.loading = false;
            console.log(err);
        });
    },

    // Render the given item on UI
    displayItem: function(id, seller, buyer, name, desc, price, status, ipfsHash) {

        var itemsRow = $('#itemsRow');
        var itemTemplate = $('#itemTemplate');
        var priceInEth = web3.fromWei(price.toNumber(), "ether");

        // hide buy button if the app.account is the seller or if already sold
        if (seller == App.account || status == 'Sold') {
            itemTemplate.find('.btn-buy').prop("disabled", true);
        } else {
            itemTemplate.find('.btn-buy').prop("disabled", false);
        }

        // Update the buy button with the id & the price
        // This avoids calling getItemDetails() again to fetch the item price when one wants to buy
        itemTemplate.find('.btn-buy').attr('data-id', id);
        itemTemplate.find('.btn-buy').attr('data-value', priceInEth);

        // Solidity returns uint for enums
        // ItemStatus = {AVAILABLE, SOLD}
        var itemStatus = (status.toNumber() === 0) ? "Available" : "Sold";
        itemTemplate.find('.item-name').html(name);
        itemTemplate.find('.item-desc').text(desc);
        itemTemplate.find('.item-price').text(priceInEth);
        itemTemplate.find('.item-status').text(itemStatus);
        itemTemplate.find('.item-seller').html(App.getEtherscanAnchorTag('address', seller));
        itemTemplate.find('.item-buyer').html(App.getEtherscanAnchorTag('address', buyer));

        // Create an image tag within the span with an id to render from ipfs later
        var itemImageId = 'item-image-' + id;
        if (ipfsHash !== '') {
            //itemTemplate.find('.item-image').prepend('<img class="thumbnail" id="' + itemImageId + '" width="150px" height="150px" />');
            //App.renderImage(itemImageId, ipfsHash);
            App.renderImage(itemTemplate.find('.item-image'), ipfsHash);
        } else {
            itemTemplate.find('.item-image').remove();
        }

        itemsRow.append(itemTemplate.html());
    },

    // Fetches the image from ipfs using hash and renders it
    renderImage: function(i, ipfsHash) {

        if (ipfsHash === '') {
            return;
        }

        const ipfs = window.IpfsApi('ipfs.infura.io', 5001, {
            protocol: 'https'
        });

        ipfs.files.cat(ipfsHash).then((stream) => {

            var buffer = [];
            var blob;

            stream.on('data', (file) => {
                var data = Array.prototype.slice.call(file);
                buffer = buffer.concat(data);
            });

            stream.on('end', () => {
                var buf = new Uint8Array(buffer);
                var blob = new Blob([buf], {
                    type: 'image/jpg'
                });
                var urlCreator = window.URL || window.webkitURL;
                var blobUrl = urlCreator.createObjectURL(blob);
                //$('#' + itemImageId).attr('src', blobUrl);
                //$('#' + itemImageId).attr('alt', 'Failed to load from IPFS');
                i.attr('id', 'foo');
                i.attr('src', blobUrl);
                i.attr('alt', 'Failed to load from IPFS');
            });
        });
    },

    // Load all items from the contract
    listItem: function(itemName, itemDesc, itemPrice) {

        // Retrieve details from modal
        var itemName = $('#item_name').val();
        var itemDesc = $('#item_desc').val();
        var itemPrice = parseFloat($('#item_price').val()) || 0;
        var itemPriceInWei = web3.toWei(itemPrice, "ether");
        var itemSeller = App.account;
        var itemImage = document.getElementById('item_image');

        // validation
        if (itemName.trim() == '' || itemDesc.trim() == '' || itemPrice == 0) {
            console.log('invalid inputs for listing an item');
            return;
        }

        // truffle uses promises
        // same can be done using callbacks too
        App.contracts.Craigslist.deployed().then(function(instance) {
            $.blockUI(blockUiOptions);
            contractInstance = instance;
            return App.uploadToIpfs(itemImage);
        }).then(function(ipfsHash) {
            //var ipfsHashToBytes32 = App.ipfsHashToBytes32(ipfsHash);
            return contractInstance.listItem(itemName, itemDesc, itemPriceInWei, ipfsHash, {
                from: itemSeller,
                gas: 500000
            });
        }).then(function(response) {
            $.unblockUI();
            var txnHash = response.receipt.transactionHash;
            var aTag = App.getEtherscanAnchorTag('transaction', txnHash);
            var msg = '<strong>Successful Transaction!</strong> Please wait for the block to be mined...<br/>' + aTag;
            App.showAlert('success', msg);
        }).catch(function(err) {
            $.unblockUI();
            var msg = '<strong>Error!</strong> Something went wrong...<br/>' + err;
            App.showAlert('error', msg);
        });
    },

    // Uploads an image to ipfs and returns the hash
    uploadToIpfs: function(image) {

        return new Promise(function(resolve, reject) {

            // pass through if no image selected
            if (image.files.length == 0) {
                resolve('');
            }

            // Read Provided File
            const reader = new FileReader();
            reader.readAsArrayBuffer(image.files[0]);

            reader.onloadend = function() {

                // Connect to IPFS
                const ipfs = window.IpfsApi('ipfs.infura.io', 5001, {
                    protocol: 'https'
                });

                // Convert data into buffer
                const buf = buffer.Buffer(reader.result);

                // Upload
                ipfs.files.add(buf, function(err, result) {

                    if (err) {
                        reject('IPFS error: ' + err);
                    }

                    resolve(result[0].hash);
                });
            }
        });
    },

    // Load all items from the contract
    buyItem: function() {

        event.preventDefault();

        var itemBuyer = App.account;
        var itemId = parseInt($(event.target).data('id'));
        var itemPrice = parseFloat($(event.target).data('value'));
        var itemPriceInWei = web3.toWei(itemPrice, "ether");

        // truffle uses promises
        // same can be done using callbacks too
        App.contracts.Craigslist.deployed().then(function(instance) {
            $.blockUI(blockUiOptions);
            return instance.buyItem(itemId, {
                from: itemBuyer,
                gas: 500000,
                value: itemPriceInWei
            });
        }).then(function(response) {
            $.unblockUI();
            var txnHash = response.receipt.transactionHash;
            var aTag = App.getEtherscanAnchorTag('transaction', txnHash);
            var msg = '<strong>Successful Transaction!</strong> Please wait for the block to be mined...<br/>' + aTag;
            App.showAlert('success', msg);
        }).catch(function(err) {
            $.unblockUI();
            var msg = '<strong>Error!</strong> Something went wrong...<br/>' + err;
            App.showAlert('error', msg);
        });
    },

    // Listeners for all events from our contract
    // For whatever reason, events seem to firing infinitely in a loop
    // Explicitly keep a track of seen events to prevent UI from going bonkers
    // And refresh UI only if a new event is received
    eventListeners: function() {

        App.contracts.Craigslist.deployed().then(function(instance) {

            // Attach listener for listItem event
            instance.itemListedEvent({}, {
                fromBlock: 1,
                toBlock: 'latest'
            }).watch(function(err, event) {

                if (err) {
                    console.log(err);
                } else {
                    var eventTxnHash = event.transactionHash;
                    if ($.inArray(eventTxnHash, App.seenListItemEvents) === -1) {
                        App.seenListItemEvents.push(eventTxnHash);
                        console.log("Received itemListedEvent for txn: " + eventTxnHash);
                        var aTag = App.getEtherscanAnchorTag('address', event.args._seller);
                        var msg = aTag + ' ---> listed <span style="padding: 3px; background-color: yellow; font-size: 14px">' + event.args._name + '</span> for sale';
                        $('#events').append('<li class="list-group-item">' + msg + '</li>');
                        App.reloadItems();
                    }
                }
            });

            // Attach listener for buyItem event
            instance.itemBoughtEvent({}, {
                fromBlock: 1,
                toBlock: 'latest'
            }).watch(function(err, event) {

                if (err) {
                    console.log(err);
                } else {
                    var eventTxnHash = event.transactionHash;
                    if ($.inArray(eventTxnHash, App.seenBuyItemEvents) === -1) {
                        App.seenBuyItemEvents.push(eventTxnHash);
                        console.log("Received itemBoughtEvent for txn: " + eventTxnHash);
                        var aTag = App.getEtherscanAnchorTag('address', event.args._buyer);
                        var msg = aTag + ' ---> bought <span style="padding: 3px; background-color: yellow; font-size: 14px">' + event.args._name + '</span>';
                        $('#events').append('<li class="list-group-item">' + msg + '</li>');
                        App.reloadItems();
                    }
                }
            });
        });

    },

    // Helper method to show bootstrap alerts
    showAlert: function(status, message) {

        var divClass = 'alert';
        if (status == 'success') {
            divClass += ' alert-success';
        } else {
            divClass += ' alert-danger';
        }

        var div = '';
        div += '<div class="' + divClass + '">';
        div += '<a href="#" class="close" data-dismiss="alert">&times;</a>';
        div += message;
        div += '</div>';

        $('#alerts').html(div);
        $('#alerts').show();
    },

    // Helper method to generate etherscan url tag
    getEtherscanAnchorTag: function(type, value) {

        var url;

        switch (App.networkId) {

            case "1":
                // mainnet
                url = 'https://etherscan.io';
                break;
            case "2":
                // morden testnet
                url = 'https://morden.etherscan.io';
                break;
            case "3":
                // ropsten testnet
                url = 'https://ropsten.etherscan.io';
                break;
            case "4":
                // rinkeby testnet
                url = 'https://rinkeby.etherscan.io';
                break;
            case "42":
                // kovan testnet
                url = 'https://kovan.etherscan.io';
                break;
            default:
                // running in local
                url = 'https://etherscan.io';
        }

        switch (type) {
            case 'transaction':
                url += '/tx/' + value;
                break;
            case 'address':
                url += '/address/' + value;
                break;
        }

        var aTag = '<a target="_blank" href="' + url + '">' + value + '</a>';
        return aTag;
    },

    // Converts ipfs hash to 34 bytes
    // 1st 2 bytes represent the hash function identifier
    // Remaining 32 bytes is the actual hash
    // Its cheaper to store fixed length data in smart contract (which is 32 bytes)
    // Storing all 34 bytes would need a string (dynamic length so costs more)
    ipfsHashToBytes32: function(ipfsHash) {
        var h = bs58.decode(ipfsHash).toString('hex').replace(/^1220/, '');
        if (h.length != 64) {
            console.log('invalid ipfs format', ipfsHash, h);
            return null;
        }
        return '0x' + h;
    },

    // Appends the ipfs hash function identifier to the trimmed hash to retrieve the object from ipfs
    bytes32ToIpfsHash: function(trimmedIpfsHash) {
        var buf = new Buffer(trimmedIpfsHash.replace(/^0x/, '1220'), 'hex')
        return bs58.encode(buf);
    }
};