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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaignFactory = require('../../campaignFactory');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

var _web = require('../../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            title: '',
            desc: '',
            minimumContribution: '',
            errMsg: '',
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'createCampaign',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var accounts, receipt;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                this.setState({ errMsg: '', loading: true });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _campaignFactory2.default.methods.createCampaign(this.state.title, this.state.desc, this.state.minimumContribution).send({ from: accounts[0] });

                            case 8:
                                receipt = _context.sent;

                                _routes.Router.pushRoute('/');
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                this.setState({ errMsg: _context.t0.message });

                            case 15:

                                this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 12]]);
            }));

            function createCampaign() {
                return _ref2.apply(this, arguments);
            }

            return createCampaign;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Create a new campaign'), _react2.default.createElement(_semanticUiReact.Form, { style: { marginTop: '40px' }, error: !!this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Title: '), _react2.default.createElement('input', { placeholder: 'Enter the campaign title here...',
                value: this.state.title,
                onChange: function onChange(event) {
                    return _this2.setState({ title: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Description: '), _react2.default.createElement(_semanticUiReact.Form.TextArea, { placeholder: 'Enter the campaign description here...',
                value: this.state.desc,
                onChange: function onChange(event) {
                    return _this2.setState({ desc: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Minimum Contribution: '), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Enter the minimum amount one needs to contribute...',
                label: 'WEI', labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this2.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!!', content: this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.createCampaign.bind(this), loading: this.state.loading,
                type: 'submit', positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Kickstart'))))));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJHcmlkIiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxheW91dCIsImNhbXBhaWduRmFjdG9yeUluc3RhbmNlIiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJ0aXRsZSIsImRlc2MiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyTXNnIiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInJlY2VpcHQiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQU8sQUFBUTs7QUFDcEMsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBNkI7Ozs7QUFDcEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7OzswTixBQUVGO21CQUFRLEFBQ0csQUFDUDtrQkFGSSxBQUVFLEFBQ047aUNBSEksQUFHaUIsQUFDckI7b0JBSkksQUFJSSxBQUNSO3FCQUxJLEEsQUFLSztBQUxMLEFBQ0o7Ozs7Ozs7Ozs7O2lDQVFBO3NDQUFBLEFBQU0sQUFFTjs7cUNBQUEsQUFBSyxTQUFTLEVBQUUsUUFBRixBQUFVLElBQUksU0FBNUIsQUFBYyxBQUF1Qjs7Ozt1Q0FHVixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O2lDQUExQjtBOzt1Q0FDZ0IsMEJBQUEsQUFBd0IsUUFBeEIsQUFDakIsZUFBZSxLQUFBLEFBQUssTUFESCxB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