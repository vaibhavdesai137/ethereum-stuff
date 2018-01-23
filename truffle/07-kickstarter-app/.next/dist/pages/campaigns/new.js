'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaignFactory = require('../../campaignFactory');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        (0, _classCallCheck3.default)(this, CampaignNew);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Create a new campaign'), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'Title: '), _react2.default.createElement('input', { placeholder: 'Enter the campaign title here...', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, 'Description: '), _react2.default.createElement(_semanticUiReact.Form.TextArea, { placeholder: 'Enter the campaign description here...', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'Minimum Contribution: '), _react2.default.createElement('input', { placeholder: 'Enter the minimum amount to contribute (in ethers)...', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Submit')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTGF5b3V0IiwiY2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJDYW1wYWlnbk5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQTZCOzs7Ozs7Ozs7SUFFOUIsQTs7Ozs7Ozs7Ozs7aUNBRU8sQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxxREFBTyxhQUFQLEFBQW1COzhCQUFuQjtnQ0FIUixBQUNJLEFBRUksQUFFSjtBQUZJO2lDQUVILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdEQUFBLEFBQUMsc0JBQUQsQUFBTSxZQUFTLGFBQWYsQUFBMkI7OEJBQTNCO2dDQVBSLEFBS0ksQUFFSSxBQUVKO0FBRkk7aUNBRUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esb0VBQU8sYUFBUCxBQUFtQjs4QkFBbkI7Z0NBWFIsQUFTSSxBQUVJLEFBRUo7QUFGSTtpQ0FFSixBQUFDLHlDQUFPLE1BQVIsQUFBYSxVQUFTLFNBQXRCLEFBQStCOzhCQUEvQjtnQ0FBQTtBQUFBO2VBaEJaLEFBQ0ksQUFFSSxBQWFJLEFBSWY7Ozs7O0FBdkJxQixBLEFBMkIxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaWRlc2FpL0RldmVsb3BtZW50L2dpdC92YWliaGF2ZGVzYWkxMzcvZXRoZXJldW0tc3R1ZmYvdHJ1ZmZsZS8wNy1raWNrc3RhcnRlci1hcHAifQ==