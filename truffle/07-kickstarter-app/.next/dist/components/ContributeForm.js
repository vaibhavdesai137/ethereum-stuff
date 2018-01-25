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

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

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
            errorMsg: '',
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

                                this.setState({ errorMsg: '', loading: true });

                                _context.prev = 2;
                                campaignInstance = (0, _campaign2.default)(this.props.address);
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaignInstance.methods.contribute().send({
                                    from: accounts[0], value: _web2.default.utils.toWei(this.state.contribution, 'ether')
                                });

                            case 9:
                                receipt = _context.sent;

                                // Refresh the page once txn is successful
                                _routes.Router.replaceRoute('/campaigns/' + this.props.address);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                this.setState({ errorMsg: _context.t0.message });

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
                    lineNumber: 37
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Wanna contribute?'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'ETH', labelPosition: 'right',
                value: this.state.contribution,
                onChange: function onChange(event) {
                    return _this2.setState({ contribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!!', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.contribute.bind(this), loading: this.state.loading,
                type: 'submit', positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Contribute')));
        }
    }]);

    return CampignContribute;
}(_react.Component);

exports.default = CampignContribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIZWFkZXIiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiQ2FtcGFpZ25GZXRjaGVyIiwid2ViMyIsIlJvdXRlciIsIkNhbXBpZ25Db250cmlidXRlIiwic3RhdGUiLCJjb250cmlidXRpb24iLCJlcnJvck1zZyIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbkluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJyZWNlaXB0IiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTyxBQUFROztBQUN0QyxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7c08sQUFFRjswQkFBUSxBQUNVLEFBQ2Q7c0JBRkksQUFFTSxBQUNWO3FCQUhJLEFBR0ssQTtBQUhMLEFBQ0o7Ozs7Ozs7Ozs7O2lDQU1BO3NDQUFBLEFBQU0sQUFFTjs7cUNBQUEsQUFBSyxTQUFTLEVBQUUsVUFBRixBQUFZLElBQUksU0FBOUIsQUFBYyxBQUF5Qjs7Z0RBRzdCO0EsbURBQW1CLHdCQUFnQixLQUFBLEFBQUssTUFBckIsQSxBQUEyQjs7dUNBQzdCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7aUNBQTFCO0E7O3dEQUNnQixBQUFpQixRQUFqQixBQUF5QixhQUF6QixBQUFzQzswQ0FDbEQsU0FEdUQsQUFDdkQsQUFBUyxJQUFJLE9BQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLEtBQUEsQUFBSyxNQUF0QixBQUE0QixjQURwQyxBQUEyQyxBQUNuQyxBQUEwQyxBO0FBRFAsQUFDN0QsaUNBRGtCOztpQ0FBaEI7QSxtREFHTjs7QUFDQTsrQ0FBQSxBQUFPLGFBQWEsZ0JBQWdCLEtBQUEsQUFBSyxNQUF6QyxBQUErQzs7Ozs7O2dFQUUvQzs7cUNBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxZQUExQixBQUFjLEFBQWdCOztpQ0FHbEM7O3FDQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdwQjt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7OEJBQTFCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sT0FBUCxBQUFhLE9BQU0sZUFBbkIsQUFBaUMsQUFDN0I7dUJBQU8sS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFBLEFBQU0sT0FBN0MsQUFBUyxBQUFjLEFBQTZCO0FBRmxFOzhCQUFBO2dDQUZSLEFBQ0ksQUFDSSxBQUlKO0FBSkk7aUNBSUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixXQUFVLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBakMsQUFBaUIsQUFBcUIsT0FBTyxTQUFTLEtBQUEsQUFBSyxNQUEzRCxBQUFpRSxBQUM3RDtzQkFESixBQUNTLFVBQVMsVUFEbEI7OEJBQUE7Z0NBQUE7QUFBQTtlQVZaLEFBQ0ksQUFFSSxBQU9JLEFBS2Y7Ozs7O0FBNUMyQixBLEFBK0NoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9