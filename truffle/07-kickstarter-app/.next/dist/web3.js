'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
var infuraKey = process.env.INFURE_KEY;

// IF: we are in browser and someone injected web3 then use that web3
// ELSE: we are either not in browser (next.js) or no web3 injection (local blockchain)
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var web3Provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/' + infuraKey);
    web3 = new _web2.default(web3Provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJpbmZ1cmFLZXkiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJFX0tFWSIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsIndlYjNQcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7QUFDQSxJQUFNLFlBQVksUUFBUSxBQUFSLElBQVksQUFBOUI7O0FBRUE7QUFDQTtBQUNBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3JFO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUZELE9BRU8sQUFDSDtRQUFNLGVBQWUsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQywrQkFBK0IsQUFBL0QsQUFBckIsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaWRlc2FpL0RldmVsb3BtZW50L2dpdC92YWliaGF2ZGVzYWkxMzcvZXRoZXJldW0tc3R1ZmYvdHJ1ZmZsZS8wNy1raWNrc3RhcnRlci1hcHAifQ==