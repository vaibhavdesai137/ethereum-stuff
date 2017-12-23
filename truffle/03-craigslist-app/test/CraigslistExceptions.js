var Craigslist = artifacts.require('./contracts/Craigslist.sol');

contract('Craigslist', function(accounts) {

    var contractInstance;
    var itemId = 1;
    var seller = accounts[1];
    var buyer = accounts[2];
    var name = "Some-Item";
    var desc = "Some-Item-Desc";
    var price = 1;
    var statusAfterListing = "0";
    var statusAfterBuying = "1";

    // Test case: cannot buy when nothing on sale
    // 1. Verify you cannot buy when no items listed yet
    // 2. Verify total item count is 0 to ensure contract state is not changed
    it(" --> should throw exception when buying an item if no items are available", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.buyItem(itemId, {
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.getItemCount.call();
        }).then(function(data) {
            assert.equal(data.toNumber(), 0, 'item count should be 0');
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            assert.equal(data, 0, 'items bought should be 0');
        });
    });

    // Test case: cannot buy an item that does not exist
    // 1. List a new item (will get id as 1)
    // 2. Try to buy an item with id 2
    // 3. Verify it fails
    // 4. Verify item with id 1 has details as expected (i.e. contract state not changed)
    it(" ---> should throw exception when buying an item that does not exist", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, price, {
                from: seller
            });
        }).then(function(receipt) {
            return contractInstance.buyItem(itemId + 1, {
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.items.call(itemId);
        }).then(function(data) {
            assert.equal(data[0].toNumber(), itemId, 'item id must be ' + itemId);
            assert.equal(data[1], seller, 'item seller address must be ' + seller);
            assert.equal(data[2], 0x0, 'item buyer address must be empty');
            assert.equal(data[3], name, 'item name must be ' + name);
            assert.equal(data[4], desc, 'item desc must be ' + desc);
            assert.equal(data[5].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[6], statusAfterListing, 'item status must be ' + statusAfterListing);
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            assert.equal(data, 0, 'items bought should be 0');
        });
    });

    // Test case: cannot buy when buyer is same as seller
    // 1. Try buying the item listed by yourself
    // 2. Verify that fails
    // 3. Verify item with id 1 has details as expected (i.e. contract state not changed)
    it(" ---> should throw exception if seller trying to buy himself", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.buyItem(itemId, {
                from: seller,
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.items.call(itemId);
        }).then(function(data) {
            assert.equal(data[0].toNumber(), itemId, 'item id must be ' + itemId);
            assert.equal(data[1], seller, 'item seller address must be ' + seller);
            assert.equal(data[2], 0x0, 'item buyer address must be empty');
            assert.equal(data[3], name, 'item name must be ' + name);
            assert.equal(data[4], desc, 'item desc must be ' + desc);
            assert.equal(data[5].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[6], statusAfterListing, 'item status must be ' + statusAfterListing);
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            assert.equal(data, 0, 'items bought should be 0');
        });
    });

    // Test case: cannot buy when price sent is different than item price
    // 1. Try buying the item listed by passing an incorrect price
    // 2. Verify that fails
    // 3. Verify item with id 1 has details as expected (i.e. contract state not changed)
    it(" ---> should throw exception if buyer sending a different amount for the item", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.buyItem(itemId, {
                from: buyer,
                value: web3.toWei(0.1, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.items.call(itemId);
        }).then(function(data) {
            assert.equal(data[0].toNumber(), itemId, 'item id must be ' + itemId);
            assert.equal(data[1], seller, 'item seller address must be ' + seller);
            assert.equal(data[2], 0x0, 'item buyer address must be empty');
            assert.equal(data[3], name, 'item name must be ' + name);
            assert.equal(data[4], desc, 'item desc must be ' + desc);
            assert.equal(data[5].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[6], statusAfterListing, 'item status must be ' + statusAfterListing);
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            assert.equal(data, 0, 'items bought should be 0');
        });
    });

    // Test case: cannot buy when already sold
    // 1. Buy the item
    // 2. Try buying it again
    // 3. Verify the item has details as expected (i.e. contract state not changed)
    it("should throw exception if trying to buy an already sold item", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.buyItem(itemId, {
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(function() {
            return contractInstance.buyItem({
                from: web3.eth.accounts[0],
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.items.call(itemId);
        }).then(function(data) {
            assert.equal(data[0].toNumber(), itemId, 'item id must be ' + itemId);
            assert.equal(data[1], seller, 'item seller address must be ' + seller);
            assert.equal(data[2], buyer, 'item buyer address must be ' + buyer);
            assert.equal(data[3], name, 'item name must be ' + name);
            assert.equal(data[4], desc, 'item desc must be ' + desc);
            assert.equal(data[5].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[6], statusAfterBuying, 'item status must be ' + statusAfterBuying);
            return contractInstance.itemBoughtCount.call();
        }).then(function(data) {
            assert.equal(data, 1, 'items bought should be 1');
        });
    });

});