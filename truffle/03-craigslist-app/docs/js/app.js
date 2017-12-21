$(function() {
    $(window).load(function() {
        App.init();
    });
});

App = {

    web3Provider: null,
    contracts: {},
    account: null,
    loading: false,
    warned: false,
    networkId: '',
    networkName: '',
    etherscanEndpoint: '',

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

                // Update account info once we know what network we are on
                $('#network').html(App.networkName);
                App.getAccountInfo();
            }
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
            web3.eth.getBalance(account, function(err, balance) {
                if (err == null) {
                    accountBalanceInEther = web3.fromWei(balance, "ether");
                    $('#accountBalance').text(accountBalanceInEther + " ETH");
                }
            });

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

            // Query details for each id and update the UI
            for (var i = 0; i < itemIds.length; i++) {

                // Weird bug in metamask that causes conversion error
                // Explicitly convert since our contract is expecting a uint
                var itemId = itemIds[i].toNumber();
                contractInstance.items.call(itemId).then(function(item) {
                    App.displayItem(item[0], item[1], item[2], item[3], item[4], item[5], item[6]);
                });
            }
            App.loading = false;
        }).catch(function(err) {
            App.loading = false;
            console.log(err);
        });
    },

    // Render the given item on UI
    displayItem: function(id, seller, buyer, name, desc, price, status) {

        var itemsRow = $('#itemsRow');
        var itemTemplate = $('#itemTemplate');
        var priceInEth = web3.fromWei(price.toNumber(), "ether");

        // hide buy button if the app.account is the seller of if already sold
        if (seller == App.account || status == 'Sold') {
            itemTemplate.find('.btn-buy').prop("disabled", true);
        } else {
            itemTemplate.find('.btn-buy').prop("disabled", false);
        }

        // Update the buy button with the id & the price
        // This avoids calling getItemDetails() again to fetch the item price when one wants to buy
        itemTemplate.find('.btn-buy').attr('data-id', id);
        itemTemplate.find('.btn-buy').attr('data-value', priceInEth);

        itemTemplate.find('.panel-title').text(name);
        itemTemplate.find('.item-desc').text(desc);
        itemTemplate.find('.item-price').text(priceInEth);
        itemTemplate.find('.item-status').text(status);
        itemTemplate.find('.item-seller').html(App.getEtherscanAnchorTag('address', seller));
        itemTemplate.find('.item-buyer').html(App.getEtherscanAnchorTag('address', buyer));
        itemsRow.append(itemTemplate.html());

    },

    // Load all items from the contract
    listItem: function(itemName, itemDesc, itemPrice) {

        // Retrieve details from modal
        var itemName = $('#item_name').val();
        var itemDesc = $('#item_desc').val();
        var itemPrice = parseFloat($('#item_price').val()) || 0;
        var itemPriceInWei = web3.toWei(itemPrice, "ether");
        var itemSeller = App.account;

        // validation
        if (itemName.trim() == '' || itemDesc.trim() == '' || itemPrice == 0) {
            console.log('invalid inputs for listing an item');
            return;
        }

        // truffle uses promises
        // same can be done using callbacks too
        App.contracts.Craigslist.deployed().then(function(instance) {
            return instance.listItem(itemName, itemDesc, itemPriceInWei, {
                from: itemSeller,
                gas: 500000
            });
        }).then(function(response) {
            var txnHash = response.receipt.transactionHash;
            var aTag = App.getEtherscanAnchorTag('transaction', txnHash);
            var msg = '<strong>Success!</strong> You just created an ethereum transaction...<br/>' + aTag;
            App.showAlert('success', msg);
        }).catch(function(err) {
            var msg = '<strong>Error!</strong> Something went wrong...<br/>' + err;
            App.showAlert('error', msg);
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
            return instance.buyItem(itemId, {
                from: itemBuyer,
                gas: 500000,
                value: itemPriceInWei
            });
        }).then(function(response) {
            var txnHash = response.receipt.transactionHash;
            var aTag = App.getEtherscanAnchorTag('transaction', txnHash);
            var msg = '<strong>Success!</strong> You just created an ethereum transaction...<br/>' + aTag;
            App.showAlert('success', msg);
        }).catch(function(err) {
            var msg = '<strong>Error!</strong> Something went wrong...<br/>' + err;
            App.showAlert('error', msg);
        });
    },

    // Listeners for all events from our contract
    eventListeners: function() {

        App.contracts.Craigslist.deployed().then(function(instance) {

            // Attach listener for listItem event
            instance.itemListedEvent({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch(function(err, event) {

                if (err) {
                    console.log(err);
                } else {
                    var aTag = App.getEtherscanAnchorTag('address', event.args._seller);
                    var msg = aTag + ' ---> listed <span style="padding: 3px; background-color: yellow; font-size: 14px"><b>' + event.args._name + '</b></span> for sale';
                    $('#events').append('<li class="list-group-item">' + msg + '</li>');
                }

                App.reloadItems();
            });

            // Attach listener for buyItem event
            instance.itemBoughtEvent({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch(function(err, event) {

                if (err) {
                    console.log(err);
                } else {
                    var aTag = App.getEtherscanAnchorTag('address', event.args._buyer);
                    var msg = aTag + ' ---> bought <span style="padding: 3px; background-color: yellow; font-size: 14px"><b>' + event.args._name + '</b></span>';
                    $('#events').append('<li class="list-group-item">' + msg + '</li>');
                }

                App.reloadItems();
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
    }
};