'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../../web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../../../campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/campaigns/spendingRequests/new.js?entry';


var SpendingRequestNew = function (_Component) {
    (0, _inherits3.default)(SpendingRequestNew, _Component);

    function SpendingRequestNew() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SpendingRequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SpendingRequestNew.__proto__ || (0, _getPrototypeOf2.default)(SpendingRequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            desc: '',
            amount: '',
            recipient: '',
            loading: false,
            errorMsg: ''

            // Used solely by Next.js since componentDidMount() works only with React and not Next
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SpendingRequestNew, [{
        key: 'createSpendingRequest',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaignInstance, accounts, receipt;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                this.setState({ errorMsg: '', loading: true });

                                _context.prev = 2;
                                campaignInstance = (0, _campaign2.default)(this.props.address);
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaignInstance.methods.createSpendingRequest(this.state.desc, _web2.default.utils.toWei(this.state.amount, 'ether'), this.state.recipient).send({ from: accounts[0] });

                            case 9:
                                receipt = _context.sent;

                                _routes.Router.pushRoute('/campaigns/' + this.props.address + '/spendingRequests');
                                _context.next = 18;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                console.log('ERROR: \n' + _context.t0);
                                console.log('ERROR MESSAGE: \n' + _context.t0.message);
                                this.setState({ errorMsg: (0, _stringify2.default)(_context.t0.message) });

                            case 18:

                                this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 13]]);
            }));

            function createSpendingRequest() {
                return _ref2.apply(this, arguments);
            }

            return createSpendingRequest;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/spendingRequests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Back')))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Create a new spending request'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Description: '), _react2.default.createElement(_semanticUiReact.Form.TextArea, { placeholder: 'Enter the spending request description here...',
                value: this.state.desc,
                onChange: function onChange(event) {
                    return _this2.setState({ desc: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Amount: '), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Enter the amount for this spending request...',
                label: 'ETH', labelPosition: 'right',
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this2.setState({ amount: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Recipient: '), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Enter the address of the account that needs to be paid for this spending request...',
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this2.setState({ recipient: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!!', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.createSpendingRequest.bind(this), loading: this.state.loading,
                type: 'submit', positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Submit'))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', { address: props.query.address });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SpendingRequestNew;
}(_react.Component);

exports.default = SpendingRequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zcGVuZGluZ1JlcXVlc3RzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdyaWQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiTGF5b3V0Iiwid2ViMyIsIkNhbXBhaWduRmV0Y2hlciIsIkxpbmsiLCJSb3V0ZXIiLCJTcGVuZGluZ1JlcXVlc3ROZXciLCJzdGF0ZSIsImRlc2MiLCJhbW91bnQiLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNc2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbkluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVTcGVuZGluZ1JlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJyZWNlaXB0IiwicHVzaFJvdXRlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJpbmQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTyxBQUFTOztBQUNyQyxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SUFFdkIsQTs7Ozs7Ozs7Ozs7Ozs7d09BRUYsQTtrQkFBUSxBQUNFLEFBQ047b0JBRkksQUFFSSxBQUNSO3VCQUhJLEFBR08sQUFDWDtxQkFKSSxBQUlLLEFBQ1Q7c0JBQVUsQUFHZDs7QSxBQVJRO0FBQUEsQUFDSjs7Ozs7Ozs7Ozs7aUNBYUE7c0NBQUEsQUFBTSxBQUVOOztxQ0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFGLEFBQVksSUFBSSxTQUE5QixBQUFj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O0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQyx3Q0FBTSxhQUFQLEFBQW1CLEFBQ2Y7dUJBQU8sS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRi9EOzhCQUFBO2dDQWhCUixBQWNJLEFBRUksQUFJSjtBQUpJO2lDQUlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsV0FBVSxTQUFTLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBcEJKLEFBb0JJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLHNCQUFMLEFBQTJCLEtBQTVDLEFBQWlCLEFBQWdDLE9BQU8sU0FBUyxLQUFBLEFBQUssTUFBdEUsQUFBNEUsQUFDeEU7c0JBREosQUFDUyxVQUFTLFVBRGxCOzhCQUFBO2dDQUFBO0FBQUE7ZUFsQ3hCLEFBQ0ksQUFDSSxBQVFJLEFBQ0ksQUFFSSxBQXFCSSxBQVEzQjs7Ozs7bUgsQUFwRTRCOzs7OztrRUFDbEIsRUFBRSxTQUFTLE1BQUEsQUFBTSxNLEFBQWpCLEFBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWkwsQSxBQW1GakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWlkZXNhaS9EZXZlbG9wbWVudC9naXQvdmFpYmhhdmRlc2FpMTM3L2V0aGVyZXVtLXN0dWZmL3RydWZmbGUvMDcta2lja3N0YXJ0ZXItYXBwIn0=