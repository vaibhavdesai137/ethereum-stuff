const assert = require('assert');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

// We only care about deploying the factory since thats the entry point for our users
// Using factory, we can retrieve all the campaigns that were created
const compiledCampaignFactoryContract = require('./build/CampaignFactory.json');

// DO NOT STORE MNEMONICS/KEYS IN THE CODE, PASS VIA ENV VARIABLES
const mnemonic = process.env.METAMASK_MNEMONIC;
const rinkebyAccount = process.env.RINKEBY_ACCOUNT;

// We'll use infura's node for deploying to avoid setting up our own network
const infuraKey = process.env.INFURE_KEY;
const infuraRinkebyEndpoint = 'https://rinkeby.infura.io/' + infuraKey;

// By default the wallet unlocks the 1st account only
// Explicitly open 3rd account which I know is my rinkeby address
const provider = new HDWalletProvider(mnemonic, infuraRinkebyEndpoint, 2);
const web3 = new Web3(provider);

// Using this style just to use "async" and "await"
// This is because "await" has to be used within a function
const deploy = async() => {

    try {

        console.log('\nUnlocking account...');
        const accounts = await web3.eth.getAccounts();
        const unlockedAccount = accounts[0];
        console.log('Account unlocked: ' + unlockedAccount);

        // Safeguard
        assert.equal(unlockedAccount, rinkebyAccount);

        console.log('\nFetching account balance...');
        const balance = await web3.eth.getBalance(unlockedAccount);
        console.log('Balance: ' + web3.utils.fromWei(balance, 'ether'));

        console.log('\nDeploy contract on rinkeby...');
        const contract = await new web3.eth.Contract(JSON.parse(compiledCampaignFactoryContract.interface)).deploy({
            data: compiledCampaignFactoryContract.bytecode
        }).send({
            from: unlockedAccount,
            gas: 5000000
        });
        console.log('Contract successfully deployed at: ' + contract.options.address);
        console.log();

    } catch (err) {
        console.log(err);
    }

}

// Trigger the deployment
deploy();
