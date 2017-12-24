
module.exports = {
    networks: {
        dev: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: 4
        },
		mainnet: {
            host: "localhost",
            port: 8545,
            network_id: 1,
            from: "0xdb5d724d9fcd93da192cafcd3c3d89419365e943",
            gas: 2000000
        }
    }
};