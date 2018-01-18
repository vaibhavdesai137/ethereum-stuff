const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const {
    interface,
    bytecode
} = require('../compile');

let accounts;
let contract;

beforeEach(async() => {

    // Get a list of all accounts
    // web3.eth.getAccounts().then(fetchedAccounts => {
    // 	console.log(fetchedAccounts);
    // });

    // Use await instead of promises
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy
    contract = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode
    }).send({
        from: accounts[0],
        gas: 1000000
    });

    // Bug in latest web3 version. Just the provider one more time.
    contract.setProvider(provider);

});

describe('Lottery Contract Test', () => {

    it('deploys a contract', () => {
        assert.ok(contract.options.address);
    });

    it('assigns the lottery manager correctly', async() => {
        const manager = await contract.methods.manager().call();
        assert.ok(manager, accounts[0]);
    });

    it('allows an account to enter the lottery', async() => {
        await contract.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('1', 'ether')
        });
        const players = await contract.methods.getPlayers().call();
        assert.equal(players[0], accounts[0]);
        assert.equal(players.length, 1);
    });

    it('allows multiple accounts to enter the lottery', async() => {
        await contract.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('1', 'ether')
        });
        await contract.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('1', 'ether')
        });
        await contract.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('1', 'ether')
        });

        const players = await contract.methods.getPlayers().call();
        assert.equal(players[0], accounts[0]);
        assert.equal(players[1], accounts[1]);
        assert.equal(players[2], accounts[2]);
        assert.equal(players.length, 3);
    });

    it('requires minimum ammount to enter the lottery', async() => {

        try {
            await contract.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei('0.01', 'ether')
            });
            assert(false);
        } catch (err) {
            assert.ok(err);
        }

        const players = await contract.methods.getPlayers().call();
        assert.equal(players.length, 0);
    });

    it('only manager can pick winner', async() => {

        try {
            await contract.methods.pickWinner().send({
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert.ok(err);
        }
    });

    it('picks winner correctly, sends lottery money to winner, resets the lottery', async() => {

        // enter lottery
        await contract.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('2', 'ether')
        });

        // balance after entering the lottery
        const beforeBal = await web3.eth.getBalance(accounts[1]);

        // pick winner
        await contract.methods.pickWinner().send({
            from: accounts[0]
        });

        // balance after picking winner
        // accounts[0] should get back the 2 ethers but would lose some on gas
        const afterBal = await web3.eth.getBalance(accounts[1]);

        // hard to compute how much was spent on gas
        // so simply check if the difference is not too crazy 
        const difference = afterBal - beforeBal;
        assert(difference > web3.utils.toWei('1.8', 'ether'));

        // ensure no more players in the lottery
        const players = await contract.methods.getPlayers().call();
        assert.equal(players.length, 0);

    });

});