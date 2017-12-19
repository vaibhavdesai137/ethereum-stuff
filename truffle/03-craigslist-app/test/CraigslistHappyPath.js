var Craigslist = artifacts.require('./contracts/Craigslist.sol');

contract('Craigslist', function(accounts) {

    var contractInstance;
	var listItemWatcher;
    var seller = accounts[0];
    var name = "Some-Item";
    var desc = "Some-Item-Desc";
    var price = 10;

    // Contract deploy test
    it("all variables should all be empty", function() {
        return Craigslist.deployed().then(function(instance) {
            return instance.getItem.call();
        }).then(function(data) {
            assert.equal(data[0], 0x0, 'item seller address must be empty');
            assert.equal(data[1], '', 'item name must be empty');
            assert.equal(data[2], '', 'item desc must be empty');
            assert.equal(data[3].toNumber(), 0, 'price must be zero');
        });
    });

    // List Item Test
    it("all variables should have correct values", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.listItem(name, desc, web3.toWei(price, "ether"), {
                from: seller
            });
        }).then(function() {
            return contractInstance.getItem.call();
        }).then(function(data) {
            assert.equal(data[0], seller, 'item seller address should be ' + seller);
            assert.equal(data[1], name, 'item name should be ' + name);
            assert.equal(data[2], desc, 'item desc should be ' + desc);
            assert.equal(web3.fromWei(data[3].toNumber(), "ether"), price, 'price should be ' + price);
        });
    });

    // List item event test
    it("should trigger an event when a new item is listed", function() {
        return Craigslist.deployed().then(function(instance) {
            contractInstance = instance;
            listItemWatcher = instance.listItemEvent();
            return contractInstance.listItem(name, desc, web3.toWei(price, "ether"), {
                from: seller
            });
        }).then(function() {
            return listItemWatcher.get();
        }).then(function(events) {
            assert.equal(events.length, 1, 'only 1 event should be triggered')
            assert.equal(events[0].args._seller, seller, 'event should log the seller as ' + seller);
            assert.equal(events[0].args._name, name, 'event should log the name as ' + name);
            assert.equal(events[0].args._desc, desc, 'event should log the desc as ' + desc);
            assert.equal(web3.fromWei(events[0].args._price.toNumber(), "ether"), price, 'event should log the price as ' + price);
        });
    });
});