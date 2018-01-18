const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const contractSrc = fs.readFileSync(contractPath, 'utf8');

// Telling solc that we only have one contract to be compiled
// Export the compiled object
module.exports = solc.compile(contractSrc, 1).contracts[':Inbox'];