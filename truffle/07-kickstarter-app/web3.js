import Web3 from 'web3';

let web3;
const infuraKey = process.env.INFURE_KEY;

// IF: we are in browser and someone injected web3 then use that web3
// ELSE: we are either not in browser (next.js) or no web3 injection (local blockchain)
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/' + infuraKey);
    web3 = new Web3(web3Provider);
}

export default web3;