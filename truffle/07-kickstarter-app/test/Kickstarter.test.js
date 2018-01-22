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

    it('marks caller as the campaign creator', async() => {
        const creator = await campaignContract.methods.creator().call();
        assert.equal(creator, accounts[1]);
    });

    it('lets people contribute and add them to contributors list', async() => {
        await campaignContract.methods.contribute().send({
            from: accounts[2],
            value: web3.utils.toWei('0.5', 'ether')
        });
        const contribution = await campaignContract.methods.contributors(accounts[2]).call();
        assert.equal(contribution, web3.utils.toWei('0.5', 'ether'));
    });

    // creator set the min to 100 wei so try sending 50
    it('checks for minimum contribution', async() => {
        try {
            await campaignContract.methods.contribute().send({
                from: accounts[2],
                value: 50
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows campaign creator to create a new spending request', async() => {
        await campaignContract.methods.createSpendingRequest('Buy cables', web3.utils.toWei('0.2', 'ether'), accounts[5]).send({
            from: accounts[1],
            gas: 1000000
        });
        let spendingRequest = await campaignContract.methods.spendingRequests(0).call();
        assert.equal(spendingRequest.desc, 'Buy cables');
    });

    it('allows to approve and finalize spending request', async() => {

        // creator = accounts[1]
        // contributor = accounts[2]
        // approver = accounts[2]


        // contribute from accounts[2]
        await campaignContract.methods.contribute().send({
            from: accounts[2],
            value: web3.utils.toWei('5', 'ether')
        });

        // only creator can create new requests (accounts[1])
        // accounts[2] gave 5 ethers so create one for 2 ethers
        await campaignContract.methods.createSpendingRequest('Buy cables', web3.utils.toWei('2', 'ether'), accounts[3]).send({
            from: accounts[1],
            gas: 1000000
        });

        // approve the request as accounts[2]
        await campaignContract.methods.approveSpendingRequest(0).send({
            from: accounts[2],
            gas: 1000000
        });

        // Since we have only 1 contributor (accounts[2]) and he/she already approved the request, our finalize request should go though
        // creator has to call finalize request
        await campaignContract.methods.finalizeSpendingRequest(0).send({
            from: accounts[1],
            gas: 1000000
        });

        // ensure the request is set to complete
        let spendingRequest = await campaignContract.methods.spendingRequests(0).call();
        assert.equal(spendingRequest.complete, true);

        // also ensure the spending request recipient got the money
        // each account started with 100 ethers and the request would have transferred another 2 ethers
        let balance = await web3.eth.getBalance(accounts[3]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, 102);
    });

});