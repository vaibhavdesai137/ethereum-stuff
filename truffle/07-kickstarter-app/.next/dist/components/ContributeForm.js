'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _campaign = require('../campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/components/ContributeForm.js';


var CampignContribute = function (_Component) {
    (0, _inherits3.default)(CampignContribute, _Component);

    function CampignContribute() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampignContribute);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampignContribute.__proto__ || (0, _getPrototypeOf2.default)(CampignContribute)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            contribution: '',
            errMsg: '',
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampignContribute, [{
        key: 'contribute',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaignInstance, accounts, receipt;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                this.setState({ errMsg: '', loading: true });

                                _context.prev = 2;

                                console.log('Address: ' + this.props.address);
                                campaignInstance = (0, _campaign2.default)(this.props.address);
                                _context.next = 7;
                                return web3.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaignInstance.methods.contribute().send({ from: accounts[0], value: web3.utils.toWei(contribution, 'ether') });

                            case 10:
                                receipt = _context.sent;
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                this.setState({ errMsg: _context.t0.message });

                            case 16:

                                this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 13]]);
            }));

            function contribute() {
                return _ref2.apply(this, arguments);
            }

            return contribute;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
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
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'ETH', labelPosition: 'right',
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
            }, 'Contribute')));
        }
    }]);

    return CampignContribute;
}(_react.Component);

exports.default = CampignContribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIZWFkZXIiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ25GZXRjaGVyIiwiQ2FtcGlnbkNvbnRyaWJ1dGUiLCJzdGF0ZSIsImNvbnRyaWJ1dGlvbiIsImVyck1zZyIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ25JbnN0YW5jZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInJlY2VpcHQiLCJtZXNzYWdlIiwidGFyZ2V0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQVE7O0FBQ3RDLEFBQU8sQUFBcUI7Ozs7Ozs7OztJQUV0QixBOzs7Ozs7Ozs7Ozs7OztzT0FFRixBOzBCQUFRLEFBQ1UsQUFDZDtvQkFGSSxBQUVJLEFBQ1I7cUJBSEksQUFHSyxBO0FBSEwsQUFDSjs7Ozs7Ozs7Ozs7aUNBTUE7c0NBQUEsQUFBTSxBQUVOOztxQ0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFGLEFBQVUsSUFBSSxTQUE1QixBQUFjLEFBQXVCOztnREFHakM7O3dDQUFBLEFBQVEsSUFBSSxjQUFjLEtBQUEsQUFBSyxNQUEvQixBQUFxQyxBQUMvQjtBLG1EQUFtQix3QkFBZ0IsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLEE7O3VDQUM3QixLQUFBLEFBQUssSUFBTCxBQUFTLEE7O2lDQUExQjtBOzt1Q0FDZ0IsaUJBQUEsQUFBaUIsUUFBakIsQUFDakIsYUFEaUIsQUFFakIsS0FBSyxFQUFFLE1BQU0sU0FBUixBQUFRLEFBQVMsSUFBSSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixjQUZqQyxBQUVaLEFBQTRCLEFBQStCLEE7O2lDQUYvRDtBOzs7Ozs7Z0VBSU47O3FDQUFBLEFBQUssU0FBUyxFQUFFLFFBQVEsWUFBeEIsQUFBYyxBQUFjOztpQ0FHaEM7O3FDQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdwQjt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7OEJBQTFCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sT0FBUCxBQUFhLE9BQU0sZUFBbkIsQUFBaUMsQUFDN0I7dUJBQU8sS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFBLEFBQU0sT0FBN0MsQUFBUyxBQUFjLEFBQTZCO0FBRmxFOzhCQUFBO2dDQUZSLEFBQ0ksQUFDSSxBQUlKO0FBSkk7aUNBSUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixXQUFVLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBakMsQUFBaUIsQUFBcUIsT0FBTyxTQUFTLEtBQUEsQUFBSyxNQUEzRCxBQUFpRSxBQUM3RDtzQkFESixBQUNTLFVBQVMsVUFEbEI7OEJBQUE7Z0NBQUE7QUFBQTtlQVZaLEFBQ0ksQUFFSSxBQU9JLEFBS2Y7Ozs7O0FBM0MyQixBLEFBOENoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9