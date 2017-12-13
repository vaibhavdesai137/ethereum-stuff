
# Install required packages
npm install ethereumjs-testrpc web3@0.20.1
npm install solc

# Start testrpc
node_modules/.bin/testrpc 

# Switch to node console
node

# Create web3 objects by connecting to testrpc as provider
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

# Ensure you get all 10 test accounts from testrpc
web3.eth.accounts;

# Read smart contract source code
code = fs.readFileSync('Voting.sol').toString();
solc = require('solc');

# Compile our solidity file
compiledCode = solc.compile(code);

# Boiler plate code to setup the chain to talk to contract
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
VotingContract = web3.eth.contract(abiDefinition);
byteCode = compiledCode.contracts[':Voting'].bytecode;
deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
deployedContract.address;
contractInstance = VotingContract.at(deployedContract.address);

# Interact with the contract
contractInstance.totalVotesFor.call('Rama');
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]});
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]});
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]});
contractInstance.totalVotesFor.call('Rama').toLocaleString();

#############################################################################################################################

# To deploy the Dapp, simply open the html file in browser and play along

