const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledCampaignContract = require('../build/Campaign.json');
const compiledCampaignFactoryContract = require('../build/CampaignFactory.json');

let accounts;
let deployedCampaignFactoryContract;
let campaignAddress;
let campaignContract;

beforeEach(async() => {

    // Use await instead of promises
    accounts = await web3.eth.getAccounts();

    // Deploy campaign factory contract
    deployedCampaignFactoryContract = await new web3.eth.Contract(JSON.parse(compiledCampaignFactoryContract.interface)).deploy({
        data: compiledCampaignFactoryContract.bytecode
    }).send({
        from: accounts[0],
        gas: '2000000'
    });

    // Bug in latest web3 version. Just the provider one more time.
    deployedCampaignFactoryContract.setProvider(provider);

    // Create a new campaign using the factory
    // Use 2nd account to create campaign
    let title = 'My Campaign';
    let desc = 'This is a great campaign.';
    let minimumContribution = 100;
    await deployedCampaignFactoryContract.methods.createCampaign(title, desc, minimumContribution).send({
        from: accounts[1],
        gas: 1000000
    });

    // Here we get all campaigns and pick the 1st one
    // Since the contract is deployed by campaign factory, we DO NOT deploy it again
    // We simply get a reference to it by passing the address as 2nd arg as opposed to creating a new contract by passing bytecode
    // Fetching an already deployed contract DOES NOT result in a txn. Hence no deploy() or send() below;
    let campaignAddresses = await deployedCampaignFactoryContract.methods.getAllCampaigns().call();
    campaignAddress = campaignAddresses[0];
    campaignContract = await new web3.eth.Contract(JSON.parse(compiledCampaignContract.interface), campaignAddress);

    // Bug in latest web3 version. Just the provider one more time.
    campaignContract.setProvider(provider);

});

describe('Campaign Factory Contract Test', () => {

    it('deploys the factory contract and creates a new campaign', () => {
        assert.ok(deployedCampaignFactoryContract.options.address);
        assert.ok(campaignContract.options.address);
    });

    it('marks caller as the campaign creator', async () => {
        const creator = await campaignContract.methods.creator().call();
        assert.equal(creator, accounts[1]);
    });

    it('lets people contribute and add them to contributors list', async () => {
        await campaignContract.methods.contribute().send({
            from: accounts[2],
            value: web3.utils.toWei('0.5', 'ether')
        });
        const contribution = await campaignContract.methods.contributors(accounts[2]).call();
        assert.equal(contribution, web3.utils.toWei('0.5', 'ether'));
    });

});