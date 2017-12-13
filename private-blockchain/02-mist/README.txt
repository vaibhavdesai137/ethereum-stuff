
# Initialize a private chain
geth --datadir=./chaindata init ./genesis.json

# Start geth
geth --datadir=./chaindata --rpc --rpccorsdomain "*"

# Attach to geth in a separate terminal
geth attach /Users/vaidesai/Development/git/vaibhavdesai137/eth/01-genesis-block/chaindata/geth.ipc 

# Check accounts
eth.accounts
[]

# MIST
# Mist starts up a node when it runs. This is ok if you don't have geth running.
# But if you do, on MacOS, you have to epxlicitly start mist from terminal to inform there is an existing geth running.
# That way MIST will rely on that geth instead of spinnning up a new node.
# /Applications/Mist.app/Contents/MacOS/Mist --rpc /Users/vaidesai/Development/git/vaibhavdesai137/eth/01-genesis-block/chaindata/geth.ipc

# Create a new account using Mist UI
# Now check the accounts
eth.accounts
["0x7874f202c9ccbecf607d1b7cec0e0a5a081ce695"]

# Check balance
eth.getBalance("0x7874f202c9ccbecf607d1b7cec0e0a5a081ce695");
0

# Start Mining to earn some ether
# You should see console messages in geth terminal about mining
miner.start(1);

# Check balance again
eth.getBalance("0x7874f202c9ccbecf607d1b7cec0e0a5a081ce695");
330000000000

