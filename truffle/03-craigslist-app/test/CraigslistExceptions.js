var Craigslist = artifacts.require('./contracts/Craigslist.sol');

contract('Craigslist', function(accounts) {

    var contractInstance;
    var seller = accounts[1];
    var buyer = accounts[2];
    var name = "Some-Item";
    var desc = "Some-Item-Desc";
    var price = 1;
    var statusAfterListing = "Available";
    var statusAfterBuying = "Sold";

    // Test case: cannot buy when nothing on sale
    it("should throw exception if trying to buy when nothing on sale", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.buyItem({
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.getItemDetails.call();
        }).then(function(data) {
            // Ensure that contract state was not altered
            assert.equal(data[0], 0x0, 'item seller address must be empty');
            assert.equal(data[1], 0x0, 'item buyer address must be empty');
            assert.equal(data[2], '', 'item name must be empty');
            assert.equal(data[3], '', 'item desc must be empty');
            assert.equal(data[4].toNumber(), 0, 'item price must be zero');
            assert.equal(data[5], '', 'item status must be empty');
        });
    });

    // Test case: cannot buy when buyer is same as seller
    it("should throw exception if seller trying to buy himself", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, price, {
                from: seller
            });
        }).then(function() {
            return contractInstance.buyItem({
                from: seller,
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.getItemDetails.call();
        }).then(function(data) {
            // Ensure that contract state was not altered
            assert.equal(data[0], seller, 'item seller address must be ' + seller);
            assert.equal(data[1], 0x0, 'item buyer address must be empty');
            assert.equal(data[2], name, 'item name must be ' + name);
            assert.equal(data[3], desc, 'item desc must be ' + desc);
            assert.equal(data[4].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[5], statusAfterListing, 'item status must be ' + statusAfterListing);
        });
    });

    // Test case: cannot buy when price sent is different than item price
    it("should throw exception if buyer sending a different amount for the item", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, price, {
                from: seller
            });
        }).then(function() {
            // send value other than item price
            return contractInstance.buyItem({
                from: buyer,
                value: web3.toWei(0.1, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.getItemDetails.call();
        }).then(function(data) {
            // Ensure that contract state was not altered
            assert.equal(data[0], seller, 'item seller address must be ' + seller);
            assert.equal(data[1], 0x0, 'item buyer address must be empty');
            assert.equal(data[2], name, 'item name must be ' + name);
            assert.equal(data[3], desc, 'item desc must be ' + desc);
            assert.equal(data[4].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[5], statusAfterListing, 'item status must be ' + statusAfterListing);
        });
    });

    // Test case: cannot buy when already sold
    it("should throw exception if trying to buy an already sold item", function() {
        return Craigslist.deployed().then(function(instance) {
            return contractInstance.buyItem({
                from: buyer,
                value: web3.toWei(price, "ether")
            });
        }).then(function() {
            // try buying again from a different account
            return contractInstance.buyItem({
                from: web3.eth.accounts[0],
                value: web3.toWei(price, "ether")
            });
        }).then(assert.fail).catch(function(err) {
            assert(err.message.indexOf('revert') >= 0, 'exception should have "revert" keyword');
        }).then(function() {
            return contractInstance.getItemDetails.call();
        }).then(function(data) {
            // Ensure that contract state was not altered
            assert.equal(data[0], seller, 'item seller address must be ' + seller);
            assert.equal(data[1], buyer, 'item buyer address must be ' + buyer);
            assert.equal(data[2], name, 'item name must be ' + name);
            assert.equal(data[3], desc, 'item desc must be ' + desc);
            assert.equal(data[4].toNumber(), price, 'item price must be ' + price);
            assert.equal(data[5], statusAfterBuying, 'item status must be ' + statusAfterBuying);
        });
    });

});