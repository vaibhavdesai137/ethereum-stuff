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
        data: bytecode,
        arguments: ['Howdy']
    }).send({
        from: accounts[0],
        gas: 1000000
    });

    // Bug in latest web3 version. Just the provider one more time.
    contract.setProvider(provider);

});

describe('Inbox Contract Test', () => {

    it('deploys a contract', () => {
        assert.ok(contract.options.address);
    });

    it('has a default message', async() => {
        const message = await contract.methods.getMessage().call();
        assert.equal(message, 'Howdy');
    });

    it('can change message', async() => {
        await contract.methods.setMessage('Hello').send({
            from: accounts[0],
            gas: 1000000
        });
        const message = await contract.methods.getMessage().call();
        assert.equal(message, 'Hello');
    });

});