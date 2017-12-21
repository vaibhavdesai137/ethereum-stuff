
# Direcory structure for the "dataDir" directory for blockchain would look something like this:

├── genesis.json
├── geth
│   ├── chaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000a
│   └── lightchaindata
│       ├── 000001.log
│       ├── CURRENT
│       ├── LOCK
│       ├── LOG
│       └── MANIFEST-000000
├── keystore
│   ├── UTC--2017-12-13T07-54-24.079784961Z--4fdf533660f6dc6f99de1d72ac2851a1acf1bf0d
│   ├── UTC--2017-12-13T07-55-46.932748232Z--0297074de7fbe97628a12950a273a3808ccaa5e2
│   └── UTC--2017-12-13T07-55-54.484415300Z--4138650371f74c8d4b763dc4410e6e786207b570

# "geth" ---> stores the blockchain data, ledgers, metadata, etc.
# "keystore" ---> stores the private keys for all accounts on this blockchain

#
# Those directores are added to .gitignore and hence they don't show up in this folder
#
