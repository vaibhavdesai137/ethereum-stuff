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

var _web = require('../../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            contribution: '',
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'contribute',
        value: function contribute() {
            event.preventDefault();

            this.setState({ errMsg: '', loading: true });

            alsert('hi');

            this.setState({ loading: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: '30px' }, divided: 'vertically', stretched: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Campaign Details')), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Wanna contribute?'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'WEI', labelPosition: 'right',
                value: this.state.contribution,
                onChange: function onChange(event) {
                    return _this2.setState({ contribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!!', content: this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.contribute.bind(this), loading: this.state.loading,
                type: 'submit', positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Contribute'))))));
        }
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJjYW1wYWlnbkZhY3RvcnlJbnN0YW5jZSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsImNvbnRyaWJ1dGlvbiIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJlcnJNc2ciLCJhbHNlcnQiLCJtYXJnaW5Ub3AiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRyaWJ1dGUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFPLEFBQVE7O0FBQ3BDLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQTZCOzs7O0FBQ3BDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7NE5BRUYsQTswQkFBUSxBQUNVLEFBQ2Q7cUIsQUFGSSxBQUVLO0FBRkwsQUFDSjs7Ozs7cUNBSVMsQUFDVDtrQkFBQSxBQUFNLEFBRU47O2lCQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxJQUFJLFNBQTVCLEFBQWMsQUFBdUIsQUFFckM7O21CQUFBLEFBQU8sQUFFUDs7aUJBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzVCOzs7O2lDQUVRO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhLFVBQVUsU0FBcEMsQUFBNEMsY0FBYSxXQUF6RDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLEFBRUosc0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzQ0FBQSxBQUFDLHVDQUFLLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFwQixBQUEwQjs4QkFBMUI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx3Q0FBTSxPQUFQLEFBQWEsT0FBTSxlQUFuQixBQUFpQyxBQUM3Qjt1QkFBTyxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUEsQUFBTSxPQUE3QyxBQUFTLEFBQWMsQUFBNkI7QUFGbEU7OEJBQUE7Z0NBRlIsQUFDSSxBQUNJLEFBSUo7QUFKSTtpQ0FJSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFdBQVUsU0FBUyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQU5KLEFBTUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssV0FBTCxBQUFnQixLQUFqQyxBQUFpQixBQUFxQixPQUFPLFNBQVMsS0FBQSxBQUFLLE1BQTNELEFBQWlFLEFBQzdEO3NCQURKLEFBQ1MsVUFBUyxVQURsQjs4QkFBQTtnQ0FBQTtBQUFBO2VBaEJ4QixBQUNJLEFBQ0ksQUFDSSxBQUlJLEFBRUksQUFPSSxBQVEzQjs7Ozs7QUExQ3NCLEEsQUE4QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaWRlc2FpL0RldmVsb3BtZW50L2dpdC92YWliaGF2ZGVzYWkxMzcvZXRoZXJldW0tc3R1ZmYvdHJ1ZmZsZS8wNy1raWNrc3RhcnRlci1hcHAifQ==