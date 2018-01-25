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
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', style: { fontSize: '40px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, _web2.default.utils.fromWei(balance, 'ether') + ' ETH'),
                description: 'Total Contribution So Far'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', style: { fontSize: '40px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }, minimumContribution + ' ETH'),
                description: 'Minimum Contribution'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', style: { fontSize: '40px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, contributorsCount),
                description: 'Total Contributors'
            }, {
                header: _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', style: { fontSize: '40px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, spendingRequestsCount),
                description: 'Total Spending Requests',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Message, { icon: 'info', header: 'Campaign Creator', content: this.props.creator, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.Header.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.props.title), _react2.default.createElement(_semanticUiReact.Header.Subheader, { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, this.props.desc)))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/spendingRequests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { fontSize: '14px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'View Spending Requests')))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiR3JpZCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJDYXJkIiwiVGV4dEFyZWEiLCJJY29uIiwiTGF5b3V0IiwiQ2FtcGFpZ25GZXRjaGVyIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInN0YXRlIiwiY29udHJpYnV0aW9uIiwibG9hZGluZyIsInByb3BzIiwiY3JlYXRvciIsInRpdGxlIiwiZGVzYyIsIm1pbmltdW1Db250cmlidXRpb24iLCJjb250cmlidXRvcnNDb3VudCIsInNwZW5kaW5nUmVxdWVzdHNDb3VudCIsImJhbGFuY2UiLCJpdGVtcyIsImhlYWRlciIsImZvbnRTaXplIiwidXRpbHMiLCJmcm9tV2VpIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIm1hcmdpblRvcCIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduSW5zdGFuY2UiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXREZXRhaWxzIiwiY2FsbCIsImNhbXBhaWduRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQU8sQUFBUSxBQUFTLEFBQU0sQUFBVTs7QUFDckUsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFFckIsQTs7Ozs7Ozs7Ozs7Ozs7NE4sQUFFRjswQkFBUSxBQUNVLEFBQ2Q7cUJBQVMsQUFHYjs7QSxBQUxRO0FBQUEsQUFDSjs7Ozs7c0NBb0JVO3lCQVVOLEtBVk0sQUFVRDtnQkFW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