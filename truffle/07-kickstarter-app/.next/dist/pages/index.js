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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaignFactory = require('../campaignFactory');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {

            var items = void 0;
            if (this.props.campaigns.length == 0) {
                items = [{
                    header: 'No campaigns found',
                    description: '',
                    fluid: true
                }];
            } else {
                items = this.props.campaigns.map(function (address) {
                    var campaignDetailsLink = '/campaigns/' + address;
                    return {
                        header: address,
                        description: _react2.default.createElement(_routes.Link, { route: campaignDetailsLink, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        }, _react2.default.createElement('a', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            }
                        }, 'View Campaign')),
                        fluid: true
                    };
                });
            }

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { divided: 'vertically', stretched: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Open Campaigns'), this.renderCampaigns()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, '\xA0'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { fontSize: '14px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Got An Idea?', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), 'Start Here')))))));
        }
    }], [{
        key: 'getInitialProps',

        // Used solely by Next.js since componentDidMount() works only with React and not Next
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _campaignFactory2.default.methods.getAllCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTGF5b3V0IiwiY2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJsZW5ndGgiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWFwIiwiY2FtcGFpZ25EZXRhaWxzTGluayIsImFkZHJlc3MiLCJyZW5kZXJDYW1wYWlnbnMiLCJmb250U2l6ZSIsIm1ldGhvZHMiLCJnZXRBbGxDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVE7O0FBRTdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQTZCOzs7O0FBQ3BDLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7OzBDQVFnQixBQUVkOztnQkFBSSxhQUFKLEFBQ0E7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLFVBQXpCLEFBQW1DLEdBQUcsQUFDbEM7OzRCQUFTLEFBQ0csQUFDUjtpQ0FGSyxBQUVRLEFBQ2I7MkJBSEosQUFBUSxBQUFDLEFBR0UsQUFFZDtBQUxZLEFBQ0wsaUJBREk7QUFEWixtQkFNTyxBQUNIOzZCQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUN4Qzt3QkFBSSxzQkFBc0IsZ0JBQTFCLEFBQTBDLEFBQzFDOztnQ0FBTyxBQUNLLEFBQ1I7cURBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQWE7MENBQWI7NENBQUEsQUFDSTtBQURKO3lCQUFBLGtCQUNJLGNBQUE7OzBDQUFBOzRDQUFBO0FBQUE7QUFBQSwyQkFKTCxBQUdDLEFBQ0ksQUFHUjsrQkFQSixBQUFPLEFBT0ksQUFFZDtBQVRVLEFBQ0g7QUFIUixBQUFRLEFBWVgsaUJBWlc7QUFjWjs7aURBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx1Q0FBSyxTQUFOLEFBQWMsY0FBYSxXQUEzQjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNDLHdCQUhULEFBQ0ksQUFFSyxBQUFLLEFBRVYsb0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxPQUFPLEVBQUUsVUFBakIsQUFBZSxBQUFZLFVBQVUsVUFBckMsQUFBK0M7OEJBQS9DO2dDQUFBO0FBQUE7ZUFFQTs7OEJBQUE7Z0NBRkEsQUFFQSxBQUFNO0FBQU47QUFBQTs7OEJBQU07Z0NBRk4sQUFFTTtBQUFBO0FBQUEsZ0JBZGxDLEFBQ0ksQUFDSSxBQUNJLEFBS0ksQUFFSSxBQUNJLEFBQ0ksQUFXL0I7OzthQXpERDs7Ozs7Ozs7Ozs7dUNBRTRCLDBCQUFBLEFBQXdCLFFBQXhCLEFBQWdDLGtCQUFoQyxBLEFBQWtEOztpQ0FBcEU7QTtpRUFDQyxFQUFFLFdBQUYsQSxBQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEEsQSxBQStENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaWRlc2FpL0RldmVsb3BtZW50L2dpdC92YWliaGF2ZGVzYWkxMzcvZXRoZXJldW0tc3R1ZmYvdHJ1ZmZsZS8wNy1raWNrc3RhcnRlci1hcHAifQ==