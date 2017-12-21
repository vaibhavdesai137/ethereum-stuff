
# Direcory structure for the "dataDir" directory for blockchain would look something like this:

├── rinkeby.json
├── geth
│   ├── chaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── lightchaindata
│       ├── 000001.log
│       ├── CURRENT
│       ├── LOCK
│       ├── LOG
│       └── MANIFEST-000000
├── keystore
│   ├── UTC--2017-12-21T03-36-16.527790666Z--ce1f115599c3ab2bc6c118da8b167728f1e64217
│   ├── UTC--2017-12-21T03-36-33.863625151Z--6abd9270bac4a7ab672907e83b319a9041800a3d
│   └── UTC--2017-12-21T03-36-56.031081804Z--c3edc1ede9f73cea8c01a07e9050035626ea2bad

# "geth" ---> stores the blockchain data, ledgers, metadata, etc.
# "keystore" ---> stores the private keys for all accounts on this blockchain

#
# Those directores are added to .gitignore and hence they don't show up in this folder
#
