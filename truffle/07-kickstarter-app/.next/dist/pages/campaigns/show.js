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

var _campaign = require('../../campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _TextArea = require('semantic-ui-react/dist/commonjs/addons/TextArea/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

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

            // Used solely by Next.js since componentDidMount() works only with React and not Next
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                creator = _props.creator,
                title = _props.title,
                desc = _props.desc,
                minimumContribution = _props.minimumContribution,
                contributorsCount = _props.contributorsCount,
                spendingRequestsCount = _props.spendingRequestsCount,
                balance = _props.balance;

            var items = [{
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, balance),
                description: 'Total Contribution So Far'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }, minimumContribution),
                description: 'Minimum Contribution'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, contributorsCount),
                description: 'Total Contributors'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, spendingRequestsCount),
                description: 'Total Spending Requests',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, this.props.creator),
                description: 'Campaign Creator',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            });
        }
    }, {
        key: 'contribute',
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
                                return campaignFactoryInstance.methods.createCampaign(this.state.title, this.state.desc, this.state.minimumContribution).send({ from: accounts[0] });

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

            function contribute() {
                return _ref2.apply(this, arguments);
            }

            return contribute;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Header.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, this.props.title), _react2.default.createElement(_semanticUiReact.Header.Subheader, { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, this.props.desc)))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: { marginTop: '50px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'Wanna contribute?'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'WEI', labelPosition: 'right',
                value: this.state.contribution,
                onChange: function onChange(event) {
                    return _this2.setState({ contribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!!', content: this.state.errMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.contribute.bind(this), loading: this.state.loading,
                type: 'submit', positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Contribute'))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var campaignInstance, campaignDetails;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaignInstance = (0, _campaign2.default)(props.query.address);
                                _context2.next = 3;
                                return campaignInstance.methods.getDetails().call();

                            case 3:
                                campaignDetails = _context2.sent;
                                return _context2.abrupt('return', {
                                    creator: campaignDetails[0],
                                    title: campaignDetails[1],
                                    desc: campaignDetails[2],
                                    minimumContribution: campaignDetails[3],
                                    contributorsCount: campaignDetails[4],
                                    spendingRequestsCount: campaignDetails[5],
                                    balance: campaignDetails[6]
                                });

                            case 5:
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

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiR3JpZCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJDYXJkIiwiTGF5b3V0IiwiQ2FtcGFpZ25GZXRjaGVyIiwid2ViMyIsIlJvdXRlciIsIlRleHRBcmVhIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJjb250cmlidXRpb24iLCJsb2FkaW5nIiwicHJvcHMiLCJjcmVhdG9yIiwidGl0bGUiLCJkZXNjIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImNvbnRyaWJ1dG9yc0NvdW50Iiwic3BlbmRpbmdSZXF1ZXN0c0NvdW50IiwiYmFsYW5jZSIsIml0ZW1zIiwiaGVhZGVyIiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXJyTXNnIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWduRmFjdG9yeUluc3RhbmNlIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZWNlaXB0IiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm1hcmdpblRvcCIsInJlbmRlckNhcmRzIiwidGFyZ2V0IiwidmFsdWUiLCJjb250cmlidXRlIiwiYmluZCIsImNhbXBhaWduSW5zdGFuY2UiLCJxdWVyeSIsImFkZHJlc3MiLCJnZXREZXRhaWxzIiwiY2FsbCIsImNhbXBhaWduRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQU8sQUFBUSxBQUFTOztBQUNyRCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFB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QUFTLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBTkosQUFNSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBQWpDLEFBQWlCLEFBQXFCLE9BQU8sU0FBUyxLQUFBLEFBQUssTUFBM0QsQUFBaUUsQUFDN0Q7c0JBREosQUFDUyxVQUFTLFVBRGxCOzhCQUFBO2dDQUFBO0FBQUE7ZUF4QnhCLEFBQ0ksQUFDSSxBQVNJLEFBSUksQUFFSSxBQU9JLEFBUTNCOzs7OzttSEF6RzRCLEE7Ozs7O2lDQUNuQjtBLG1EQUFtQix3QkFBZ0IsTUFBQSxBQUFNLE1BQXRCLEFBQTRCLEE7O3VDQUN2QixpQkFBQSxBQUFpQixRQUFqQixBQUF5QixhQUF6QixBQUFzQyxBOztpQ0FBOUQ7QTs7NkNBRU8sZ0JBRE4sQUFDTSxBQUFnQixBQUN6QjsyQ0FBTyxnQkFGSixBQUVJLEFBQWdCLEFBQ3ZCOzBDQUFNLGdCQUhILEFBR0csQUFBZ0IsQUFDdEI7eURBQXFCLGdCQUpsQixBQUlrQixBQUFnQixBQUNyQzt1REFBbUIsZ0JBTGhCLEFBS2dCLEFBQWdCLEFBQ25DOzJEQUF1QixnQkFOcEIsQUFNb0IsQUFBZ0IsQUFDdkM7NkNBQVMsZ0JBQUEsQUFBZ0IsQSxBQVB0QjtBQUFBLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaZSxBLEFBcUgzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWlkZXNhaS9EZXZlbG9wbWVudC9naXQvdmFpYmhhdmRlc2FpMTM3L2V0aGVyZXVtLXN0dWZmL3RydWZmbGUvMDcta2lja3N0YXJ0ZXItYXBwIn0=