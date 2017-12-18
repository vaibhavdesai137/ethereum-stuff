var Craigslist = artifacts.require("./Craigslist.sol");

module.exports = function(deployer) {
	deployer.deploy(Craigslist);
};
