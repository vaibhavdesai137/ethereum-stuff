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

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

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
                        lineNumber: 47
                    }
                }, balance),
                meta: 'ETH',
                description: 'Total Contribution So Far'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, minimumContribution),
                meta: 'ETH',
                description: 'Minimum Contribution'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, contributorsCount),
                description: 'Total Contributors'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { fontSize: '50px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, spendingRequestsCount),
                description: 'Total Spending Requests',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, this.props.creator),
                description: 'Campaign Creator',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.Header.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.props.title), _react2.default.createElement(_semanticUiReact.Header.Subheader, { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, this.props.desc)))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: { marginTop: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaignInstance, campaignDetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaignInstance = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaignInstance.methods.getDetails().call();

                            case 3:
                                campaignDetails = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    creator: campaignDetails[0],
                                    title: campaignDetails[1],
                                    desc: campaignDetails[2],
                                    minimumContribution: _web2.default.utils.fromWei(campaignDetails[3], 'ether'),
                                    contributorsCount: campaignDetails[4],
                                    spendingRequestsCount: campaignDetails[5],
                                    balance: campaignDetails[6]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiR3JpZCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJDYXJkIiwiVGV4dEFyZWEiLCJMYXlvdXQiLCJDYW1wYWlnbkZldGNoZXIiLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsImNvbnRyaWJ1dGlvbiIsImxvYWRpbmciLCJwcm9wcyIsImNyZWF0b3IiLCJ0aXRsZSIsImRlc2MiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiY29udHJpYnV0b3JzQ291bnQiLCJzcGVuZGluZ1JlcXVlc3RzQ291bnQiLCJiYWxhbmNlIiwiaXRlbXMiLCJoZWFkZXIiLCJmb250U2l6ZSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwibWFyZ2luVG9wIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ25JbnN0YW5jZSIsInF1ZXJ5IiwibWV0aG9kcyIsImdldERldGFpbHMiLCJjYWxsIiwiY2FtcGFpZ25EZXRhaWxzIiwidXRpbHMiLCJmcm9tV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBTyxBQUFRLEFBQVMsQUFBTTs7QUFDM0QsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFckI7Ozs7Ozs7Ozs7Ozs7OzROLEFBRUY7MEJBQVEsQUFDVSxBQUNkO3FCQUFTLEFBR2I7O0EsQUFMUTtBQUFBLEFBQ0o7Ozs7O3NDQW9CVTt5QkFVTixLQVZNLEFBVUQ7Z0JBVkMsQUFHTixpQkFITSxBQUdO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QTFFSyxBOzs7OztpQ0FDbkI7QSxtREFBbUIsd0JBQWdCLE1BQUEsQUFBTSxNQUF0QixBQUE0QixBOzt1Q0FDdkIsaUJBQUEsQUFBaUIsUUFBakIsQUFBeUIsYSxBQUF6QixBQUFzQzs7aUNBQTlEO0E7OzZDQUVPLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCOzZDQUFTLGdCQUZOLEFBRU0sQUFBZ0IsQUFDekI7MkNBQU8sZ0JBSEosQUFHSSxBQUFnQixBQUN2QjswQ0FBTSxnQkFKSCxBQUlHLEFBQWdCLEFBQ3RCO3lEQUFxQixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsZ0JBQW5CLEFBQW1CLEFBQWdCLElBTHJELEFBS2tCLEFBQXVDLEFBQzVEO3VEQUFtQixnQkFOaEIsQUFNZ0IsQUFBZ0IsQUFDbkM7MkRBQXVCLGdCQVBwQixBQU9vQixBQUFnQixBQUN2Qzs2Q0FBUyxnQkFSTixBQVFNLEFBQWdCLEE7QUFSdEIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVplLEEsQUE0RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaWRlc2FpL0RldmVsb3BtZW50L2dpdC92YWliaGF2ZGVzYWkxMzcvZXRoZXJldW0tc3R1ZmYvdHJ1ZmZsZS8wNy1raWNrc3RhcnRlci1hcHAifQ==