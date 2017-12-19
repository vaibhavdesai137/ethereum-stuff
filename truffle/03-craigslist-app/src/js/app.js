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

        App.displayAccountInfo();
        return App.initContract();
    },

    // Get the coinbase account and its balance to render on the UI
    // web3 does not have promises thats why using callbacks
    displayAccountInfo: function() {
        web3.eth.getCoinbase(function(err, account) {
            if (err == null) {
                App.account = account;
                $('#account').text(account);
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
            return instance.getItem.call();
        }).then(function(item) {

            // no items available
            if (item[0] == 0x0) {
                return;
            }

            var itemSeller = (item[0] == App.account) ? "You" : item[0];
            var itemName = item[1];
            var itemDesc = item[2];
            var itemPrice = web3.fromWei(item[3].toNumber(), "ether");

            // Clear existing items
            var itemsRow = $('#itemsRow');
            itemsRow.empty();

            var itemTemplate = $('#itemTemplate');
            itemTemplate.find('.panel-title').text(itemName);
            itemTemplate.find('.item-description').text(itemDesc);
            itemTemplate.find('.item-price').text(itemPrice);
            itemTemplate.find('.item-seller').text(itemSeller);

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
        // Not needed since we added an event listener now
        // No need to explicitly reload items
        // }).then(function(item) {
        //    App.reloadItems();
        }).catch(function(err) {
            console.log(err);
        });
    },

    // Listeners for all events from our contract
    eventListeners: function() {

        // Attach listener for listItem event
        App.contracts.Craigslist.deployed().then(function(instance) {
            instance.listItemEvent({}, {
                fromBlock: 0,
                toBlock: 'latest'
            }).watch(function(err, event) {

                // Update UI to show the new event
                var msg = '<b>' + event.args._name + '</b> is for sale now...';
                $('#events').append('<li class="list-group-item">' + msg + '</li>');

                // Reload all items
                App.reloadItems();

            });
        });

    }
};

$(function() {
    $(window).load(function() {
        App.init();
    });
});