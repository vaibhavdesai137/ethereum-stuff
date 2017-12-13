# Install ethereum on Max
brew tap ethereum/ethereum
brew install ethereum

# Start ethereum node, connect to peers & download blockchain
geth --testnet --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303"


# Get into truffle console
truffle console

# Create a new account
web3.personal.newAccount('f00Bar');

# Check the balance for the account
web3.eth.getBalance('0xE05cb6A1e5B2bB023afaC1D0bB061Dd658874A32');

# Unlock account
web3.personal.unlockAccount('0x7ae32b556d621a43b9b27f91966f1a6c7b3a1c5a', 'f00Bar', 15000);

# Beg for some ether here
http://faucet.ropsten.be:3001/


