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

            var items = this.props.campaigns.map(function (campaignAddress) {

                var campaignDetailsLink = '/campaigns/' + campaignAddress;

                return {
                    header: campaignAddress,
                    description: _react2.default.createElement(_routes.Link, { route: campaignDetailsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: '30px' }, divided: 'vertically', stretched: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Open Campaigns'), this.renderCampaigns()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, '\xA0'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { fontSize: '14px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Got An Idea?', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), 'Start Here')))))));
        }
    }], [{
        key: 'getInitialProps',

        // Used soelly by Next.js since componentDidMount() works only with React and not Next
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTGF5b3V0IiwiY2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJjYW1wYWlnbkRldGFpbHNMaW5rIiwiY2FtcGFpZ25BZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm1hcmdpblRvcCIsInJlbmRlckNhbXBhaWducyIsImZvbnRTaXplIiwibWV0aG9kcyIsImdldEFsbENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUTs7QUFFN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBNkI7Ozs7QUFDcEMsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7MENBUWdCLEFBRWQ7O2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLDJCQUFtQixBQUV0RDs7b0JBQUksc0JBQXNCLGdCQUExQixBQUEwQyxBQUUxQzs7OzRCQUFPLEFBQ0ssQUFDUjtpREFDSSxBQUFDLDhCQUFLLE9BQU4sQUFBYTtzQ0FBYjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUpMLEFBR0MsQUFDSSxBQUdSOzJCQVBKLEFBQU8sQUFPSSxBQUVkO0FBVFUsQUFDSDtBQUxSLEFBQWMsQUFlZCxhQWZjOztpREFlUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYSxVQUFVLFNBQXBDLEFBQTRDLGNBQWEsV0FBekQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyx3QkFIVCxBQUNJLEFBRUssQUFBSyxBQUVWLG9DQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sT0FBTyxFQUFFLFVBQWpCLEFBQWUsQUFBWSxVQUFVLFVBQXJDLEFBQStDOzhCQUEvQztnQ0FBQTtBQUFBO2VBRUE7OzhCQUFBO2dDQUZBLEFBRUEsQUFBTTtBQUFOO0FBQUE7OzhCQUFNO2dDQUZOLEFBRU07QUFBQTtBQUFBLGdCQWRsQyxBQUNJLEFBQ0ksQUFDSSxBQUtJLEFBRUksQUFDSSxBQUNJLEFBVy9COzs7YUFsREQ7Ozs7Ozs7Ozs7O3VDQUU0QiwwQkFBQSxBQUF3QixRQUF4QixBQUFnQyxrQkFBaEMsQUFBa0QsQTs7aUNBQXBFO0E7aUVBQ0MsRUFBRSxXQUFGLEFBQWEsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBLEEsQUF3RDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWlkZXNhaS9EZXZlbG9wbWVudC9naXQvdmFpYmhhdmRlc2FpMTM3L2V0aGVyZXVtLXN0dWZmL3RydWZmbGUvMDcta2lja3N0YXJ0ZXItYXBwIn0=