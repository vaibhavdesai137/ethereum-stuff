#!/bin/sh

# networkid
# 	- Every blockchain has a unique networkid. 
# 	- This identifies the network you are trying to work on. Mentioned in genesis.json
#
# mine
#	- Tells geth that this node will be mining new blocks
#
# nodiscover
# 	- Tells geth to not bother looking for peers since this is private
#
# rpc
# 	- Allows blockchain to be accessible via http. 
# 	- Without this, only console access will be available.
#
# rpcport
# 	- Port where rpc access is available
#
# port
# 	- p2p port for nodes
#
# rpccorsdomain
#	- If webserver runs on 8080 and you make ajax request from geth on 8545, geth will reject it since this is cross-domain
# 	- So your website (dapps) won't be able to talk to geth
#
# rpcapi
#	- APIs we want to allow to interact with our blockchain
#
# unlock
# 	- Unlocks the 1st account on our blockchain. Remember, we created three
# 	- This account gets the mining rewards
#
# password
# 	- Password to unlock the account specified by the "unlock" parameter
# 	- Read it from the file
#
# ipcpath
#	- Only needed on mac
#	- geth.ipc file is created/destroyed everytime a node starts/stops
# 	- Mist starts up a new node when it runs. This is ok if you don't have geth running
# 	- But if you do, on MacOS, you have to explicitly start mist from terminal to inform there is an existing geth running
# 	- /Applications/Mist.app/Contents/MacOS/Mist --rpc /path-to-your-nodes-get-rpc-file/geth.ipc
# 	- By default, MIST looks for geth.ipc under ~/Library/Ethereum/geth.ipc for mac
# 	- So its easier simply set that as the path so that mist runs without any issue

geth --networkid 4224 --mine --datadir "./private-blockchain" --nodiscover --rpc --rpcport "8545"  --rpccorsdomain "*" --port "30303" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./private-blockchain/password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
