const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const {
    interface,
    bytecode
} = require('../compile');

// DO NOT STORE MNEMONICS IN THE CODE
// PASS VIA ENV VARIABLES
const mnemonic = '';
const infuraKey = 'nvxZYSfnZBHyzCyDe3YE';
const rinkebyEndpoint = 'https://rinkeby.infura.io/' + infuraKey;
const provider = new HDWalletProvider(mnemonic, rinkebyEndpoint);
const web3 = new Web3(provider);

// Using this style just to use "async" and "await"
// This is becoz "await" has to be used within a function
const deploy = async() => {

    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting rinkeby deploy using account: ' + accounts[0]);

    const contract = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode
    }).send({
        from: accounts[0],
        gas: 1000000
    });

    console.log('Contract successfully deployed at: ' + contract.options.address);
}

// Trigger the deployment
deploy();