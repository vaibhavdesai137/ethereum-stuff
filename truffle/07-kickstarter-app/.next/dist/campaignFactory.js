'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaignFactoryContractAddress = '0x53bBd7433D0f54ca6608A53acFDa321F392A6989';
var campaignFactoryContractInstance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), campaignFactoryContractAddress);

exports.default = campaignFactoryContractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWduRmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ25GYWN0b3J5IiwiY2FtcGFpZ25GYWN0b3J5Q29udHJhY3RBZGRyZXNzIiwiY2FtcGFpZ25GYWN0b3J5Q29udHJhY3RJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0saUNBQWlDLEFBQXZDO0FBQ0EsSUFBTSxrQ0FBa0MsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ3BDLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURvQyxZQUVwQyxBQUZvQyxBQUF4QyxBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNhbXBhaWduRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9