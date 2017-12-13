

# Initialize a private chain
geth --datadir=./chaindata init ./genesis.json
# WARN [09-21|12:38:12] No etherbase set and no accounts found as default 
# ...
# ...
# ...
# INFO [09-21|12:38:12] Writing custom genesis block 
# INFO [09-21|12:38:12] Successfully wrote genesis state


# Start geth with that chaindata directory:
geth --datadir=./chaindata 
# WARN [09-21|12:41:06] No etherbase set and no accounts found as default 
# ...
# ...
# ...
# INFO [09-21|12:41:08] UDP listener up                          self=enode://5b6f486d57ffdc6cb40618c7eaacee9304b84f267e8691d0cdea3b911642842513e46aee4ba6fb93d4554a2bff0a4486f2af331cfd3cee1e9a61f9343957b828@[::]:30303
# INFO [09-21|12:41:08] RLPx listener up                         self=enode://5b6f486d57ffdc6cb40618c7eaacee9304b84f267e8691d0cdea3b911642842513e46aee4ba6fb93d4554a2bff0a4486f2af331cfd3cee1e9a61f9343957b828@[::]:30303
# INFO [09-21|12:41:08] IPC endpoint opened: /Users/vaidesai/Development/git/vaibhavdesai137/eth/01-genesis-block/chaindata/geth.ipc 

# We can also do "geth --datadir=./chaindata console". This gives us console in the same window.
OR
# We can do "geth attach" in a separate terminal to get a console for geth process that is already running.
# geth attach /Users/vaidesai/Development/git/vaibhavdesai137/eth/01-genesis-block/chaindata/geth.ipc 


# RPC
# Use -rpc when you have this geth to have outside access via http
# Without rpc, only console access is available
# geth --datadir=./chaindata --rpc


# CORS
# If webserver runs on 8080 and you make ajax request from geth on 8545, geth will reject it since this is cross-domain
# So your website (dapps) won't be able to talk to geth
# To override, use --rpccorsdomain "*" when running geth. This tells geth to respond no matter where the request came from
# geth --datadir=./chaindata --rpc --rpccorsdomain "*"

# MIST
# Mist starts up a node when it runs. This is ok if you don't have geth running.
# But if you do, on MacOS, you have to epxlicitly start mist from terminal to inform there is an existing geth running.
# That way MIST will rely on that geth instead of spinnning up a new node.
# /Applications/Mist.app/Contents/MacOS/Mist --rpc /Users/vaidesai/Development/git/vaibhavdesai137/eth/01-genesis-block/chaindata/geth.ipc