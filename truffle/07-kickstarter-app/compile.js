const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
const srcFilePath = path.resolve(__dirname, 'contracts', 'Kickstartr.sol');
const src = fs.readFileSync(srcFilePath, 'utf8');

// This will have two contracts
console.log('\nCompiling ' + srcFilePath);
let contracts;
try {
    contracts = solc.compile(src).contracts;
} catch (err) {
    console.log(err);
}

// Delete everything under build and create the build dir if missing
fs.removeSync(buildPath);
fs.ensureDirSync(buildPath);

// Write each contract in its own json file
// build/Campaign.sol
// build/CampaignFactory.sol
console.log();
for (let contract in contracts) {
    const filename = contract.replace(':', '') + '.json';
    console.log('Creating ' + filename);
    fs.outputJsonSync(path.resolve(buildPath, filename), contracts[contract]);
}
console.log();