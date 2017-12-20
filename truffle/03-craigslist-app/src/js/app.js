App = {

    web3Provider: null,
    contracts: {},
    showDefaultItem: true,
    account: null,

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
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }

        web3 = new Web3(App.web3Provider);

        App.displayNetworkInfo();
        App.displayAccountInfo();
        return App.initContract();
    },

    // Get network
    displayNetworkInfo: function() {

        web3.version.getNode(function(err, node) {
            $('#node').html(node);
        });

        web3.version.getNetwork(function(err, netId) {

            var networkName;

            switch (netId) {
                case "1":
                    networkName = 'Mainnet';
                    break;
                case "2":
                    networkName = 'Morden Test Network (Deprecated)';
                    break;
                case "3":
                    networkName = 'Ropsten Test Network';
                    break;
                case "4":
                    networkName = 'Rinkeby Test Network';
                    break;
                case "42":
                    networkName = 'Kovan Test Network';
                    break;
                default:
                    networkName = netId;
                    console.log('This is an unknown network for netId: ' + netId);
            }

            $('#network').html(networkName);
        });
    },

    // Get the coinbase account and its balance to render on the UI
    // web3 does not have promises thats why using callbacks
    displayAccountInfo: function() {

        // Get account info
        web3.eth.getCoinbase(function(err, account) {
            if (err == null) {
                App.account = account;
                $('#account').html(App.getEtherscanAnchorTag('address', account));
                web3.eth.getBalance(account, function(err, balance) {
                    if (err == null) {
                        accountBalanceInEther = web3.fromWei(balance, "ether");
                        $('#accountBalance').text(accountBalanceInEther + " ETH");
                    }
                });
            }
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

    // Load all items from the contract
    reloadItems: function() {

        // Balance may have changed
        App.displayAccountInfo();

        // truffle uses promises
        // same can be done using callbacks too
        App.contracts.Craigslist.deployed().then(function(instance) {
            return instance.getItemDetails.call();
        }).then(function(item) {

            // no items available
            if (item[0] == 0x0) {
                return;
            }

            // Clear existing items
            var itemsRow = $('#itemsRow');
            itemsRow.empty();

            var itemTemplate = $('#itemTemplate');

            // hide buy button if the app.account is the seller of if already sold
            if (item[0] == App.account || item[5] == 'Sold') {
                itemTemplate.find('.btn-buy').hide();
            }

            // item details
            var itemSeller = item[0];
            var itemBuyer = item[1];
            var itemName = item[2];
            var itemDesc = item[3];
            var itemPrice = web3.fromWei(item[4].toNumber(), "ether");
            var itemStatus = item[5];

            // Update the buy button with the price
            // This avoids calling getItemDetails() again to fetch the item price when one wants to buy
            itemTemplate.find('.btn-buy').attr('data-value', itemPrice);

            // etherscan.io/address/0x2944e7a6e74cd70ba15bffbb070c1fcb8046807c
            itemTemplate.find('.panel-title').text(itemName);
            itemTemplate.find('.item-description').text(itemDesc);
            itemTemplate.find('.item-price').text(itemPrice);
            itemTemplate.find('.item-status').text(itemStatus);
            itemTemplate.find('.item-seller').html(App.getEtherscanAnchorTag('address', itemSeller));
            itemTemplate.find('.item-buyer').html(App.getEtherscanAnchorTag('address', item[1]));

            itemsRow.append(itemTemplate.html());

        }).catch(function(err) {
            console.log(err);
        });
    },

    // Load all items from the contract
    listItem: function(itemName, itemDesc, itemPrice) {

        // Retrieve details from modal
        var itemName = $('#item_name').val();
        var itemDesc = $('#item_desc').val();
        var itemPrice = parseInt($('#item_price').val()) || 0;
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
        var itemPrice = parseInt($(event.target).data('value'));
        var itemPriceInWei = web3.toWei(itemPrice, "ether");

        // truffle uses promises
        // same can be done using callbacks too
        App.contracts.Craigslist.deployed().then(function(instance) {
            return instance.buyItem({
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

        // Attach listener for listItem event
        App.contracts.Craigslist.deployed().then(function(instance) {
            instance.itemListedEvent({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch(function(err, event) {

                // Update UI to show the new event
                var msg = '<b>' + event.args._name + '</b> is listed...';
                $('#itemsListed').append('<li class="list-group-item">' + msg + '</li>');

                // Reload all items
                App.reloadItems();

            });
        });

        // Attach listener for buyItem event
        App.contracts.Craigslist.deployed().then(function(instance) {
            instance.itemBoughtEvent({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch(function(err, event) {

                // Update UI to show the new event
                var msg = '<b>' + event.args._name + '</b> was bought...';
                $('#itemsBought').append('<li class="list-group-item">' + msg + '</li>');

                // Reload all items
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

        var url = "https://etherscan.io";

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

$(function() {
    $(window).load(function() {
        App.init();
    });
});