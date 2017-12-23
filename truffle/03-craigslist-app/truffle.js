
module.exports = {
    networks: {
        dev: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: "4"
        },
		live: {
            host: "localhost",
            port: 8545,
            network_id: "1"
        }
    }
};