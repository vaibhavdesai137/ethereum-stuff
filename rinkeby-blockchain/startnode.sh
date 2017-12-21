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

geth --networkid=4 --datadir "./rinkeby-blockchain/" --cache=512 --ethstats='myrinkebynode:Respect my authoritah!@stats.rinkeby.io' --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpc --rpcapi="personal,eth,network,web3,net" --ipcpath "~/Library/Ethereum/geth.ipc"
