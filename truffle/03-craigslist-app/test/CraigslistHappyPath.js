var Craigslist = artifacts.require('./contracts/Craigslist.sol');

contract('Craigslist', function(accounts) {

    var contractInstance;
    var seller = accounts[1];
    var buyer = accounts[2];
    var name = "Some-Item";
    var desc = "Some-Item-Desc";
    var price = 10;
    var statusAfterListing = "Available";
    var statusAfterBuying = "Sold";

    var sellerBalanceBeforeBuy;
    var sellerBalanceAfterBuy;
    var buyerBalanceBeforeBuy;
    var buyerBalanceAfterBuy;

    // Contract deploy test
    it("all variables should all be empty when contract is deployed", function() {
        return Craigslist.deployed().then(function(instance) {
            return instance.getItemDetails.call();
        }).then(function(data) {
            assert.equal(data[0], 0x0, 'item seller address must be empty');
            assert.equal(data[1], 0x0, 'item buyer address must be empty');
            assert.equal(data[2], '', 'item name must be empty');
            assert.equal(data[3], '', 'item desc must be empty');
            assert.equal(data[4].toNumber(), 0, 'price must be zero');
            assert.equal(data[5], '', 'item status must be empty');
        });
    });

    // listItem Test
    it("all variables should have correct values after item is listed", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, web3.toWei(price, "ether"), {
                from: seller
            });
        }).then(function() {
            return contractInstance.getItemDetails.call();
        }).then(function(data) {
            assert.equal(data[0], seller, 'item seller address should be ' + seller);
            assert.equal(data[1], 0x0, 'item buyer address should be empty');
            assert.equal(data[2], name, 'item name should be ' + name);
            assert.equal(data[3], desc, 'item desc should be ' + desc);
            assert.equal(web3.fromWei(data[4].toNumber(), "ether"), price, 'price should be ' + price);
            assert.equal(data[5], statusAfterListing, 'item status should be ' + statusAfterListing);
        });
    });

    /*
    //
    // // itemListedEvent test the wrong way
    // Using itemListedEventWatcher.get() works relaibly only on testrpc since it is in-mem and very fast
    // On actual blockchain (private, test, main, etc.) this does not work reliably 
    // This is because we are actually querying the events by using .get()
    // Ideally, we should be looking for the response from blockchain when initiating the txn
    // Thats exactly what we'll do below
    //
    var itemListedEventWatcher;
    it("should trigger an event when a new item is listed", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            itemListedEventWatcher = instance.itemListedEvent();
            return contractInstance.listItem(name, desc, web3.toWei(price, "ether"), {
                from: seller
            });
        }).then(function() {
            // BAD
            return itemListedEventWatcher.get();
        }).then(function(events) {
            assert.equal(events.length, 1, 'only 1 event should be triggered')
            assert.equal(events[0].args._seller, seller, 'event should log the seller as ' + seller);
            assert.equal(events[0].args._name, name, 'event should log the name as ' + name);
            assert.equal(web3.fromWei(events[0].args._price.toNumber(), "ether"), price, 'event should log the price as ' + price);
        });
    });
    */

    // itemListedEvent test the right way
    it("should trigger an event when a new item is listed", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, web3.toWei(price, "ether"), {
                from: seller
            });
        }).then(function(receipt) {

            assert.equal(receipt.logs.length, 1, 'only 1 event should be triggered');

            var log = receipt.logs[0];
            assert.equal(log.args._seller, seller, 'event should log the seller as ' + seller);
            assert.equal(log.args._name, name, 'event should log the name as ' + name);
            assert.equal(web3.fromWei(log.args._price.toNumber(), "ether"), price, 'event should log the price as ' + price);
        });
    });

    // buyItem Test
    it("all variables should have correct values after item is bought", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;

            // balances before buy
            sellerBalanceBeforeBuy = web3.fromWei(web3.eth.getBalance(seller), "ether").toNumber();
            buyerBalanceBeforeBuy = web3.fromWei(web3.eth.getBalance(buyer), "ether").toNumber();

            return contractInstance.buyItem({
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(function(receipt) {

            // Verify the txn receipt is good and that our event was logged
            assert.equal(receipt.logs[0].args._seller, seller, 'item seller address should be ' + seller);
            assert.equal(receipt.logs[0].args._buyer, buyer, 'item buyer address should be ' + buyer);
            assert.equal(receipt.logs[0].args._name, name, 'item name should be ' + name);
            assert.equal(web3.fromWei(receipt.logs[0].args._price.toNumber(), "ether"), price, 'price should be ' + price);

            // balances after buy and verify money transfer happened
            // buyerBalanceAfterBuy is checking for less than equal to because buyer would pay for gas too
            sellerBalanceAfterBuy = web3.fromWei(web3.eth.getBalance(seller), "ether").toNumber();
            buyerBalanceAfterBuy = web3.fromWei(web3.eth.getBalance(buyer), "ether").toNumber();
            assert(sellerBalanceAfterBuy == sellerBalanceBeforeBuy + price, 'seller should have earned ' + price + ' ETH');
            assert(buyerBalanceAfterBuy <= buyerBalanceBeforeBuy - price, 'buyer should have spent ' + price + ' ETH');

            return contractInstance.getItemDetails.call();

        }).then(function(data) {

            // Verify the state variables have correct values
            assert.equal(data[0], seller, 'item seller address should be ' + seller);
            assert.equal(data[1], buyer, 'item buyer address should be ' + buyer);
            assert.equal(data[2], name, 'item name should be ' + name);
            assert.equal(data[3], desc, 'item desc should be ' + desc);
            assert.equal(web3.fromWei(data[4].toNumber(), "ether"), price, 'price should be ' + price);
            assert.equal(data[5], statusAfterBuying, 'item status should be ' + statusAfterBuying);

        });
    });

});