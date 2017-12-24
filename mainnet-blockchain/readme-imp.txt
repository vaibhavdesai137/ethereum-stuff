
# Direcory structure for the "dataDir" directory for blockchain would look something like this:

├── geth
│   ├── LOCK
│   ├── chaindata
│   │   ├── 000233.ldb
│   │   ├── 000234.ldb
│   │   ├── ...
│   │   ├── ...
│   │   ├── ...
│   │   ├── 067085.ldb
│   │   ├── 067086.ldb
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   ├── ethash
│   │   ├── cache-R23-129656acf5804305
│   │   ├── cache-R23-2228076c08ee5e35
│   │   └── cache-R23-39c5f107628ba618
│   ├── nodekey
│   ├── nodes
│   │   ├── 000004.log
│   │   ├── 000006.ldb
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── transactions.rlp
├── keystore
│   └── UTC--2017-12-24T03-14-07.389585978Z--...

# "geth" ---> stores the blockchain data, ledgers, metadata, etc.
# "keystore" ---> stores the private keys for all accounts on this blockchain

#
# Those directores are added to .gitignore and hence they don't show up in this folder
#
