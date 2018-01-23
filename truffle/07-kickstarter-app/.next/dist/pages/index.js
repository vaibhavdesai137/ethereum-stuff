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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/index.js?entry';


var Campaigns = function (_Component) {
    (0, _inherits3.default)(Campaigns, _Component);

    function Campaigns() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Campaigns);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Campaigns.__proto__ || (0, _getPrototypeOf2.default)(Campaigns)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            campaigns: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Campaigns, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {

            var items = this.props.campaigns.map(function (campaignAddress) {
                return {
                    header: campaignAddress,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, 'View Campaign'),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: '30px' }, divided: 'vertically', stretched: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Open Campaigns'), this.renderCampaigns()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, '\xA0'), _react2.default.createElement(_semanticUiReact.Button, { style: { fontSize: '14px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Got An Idea?', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), 'Start Here')))));
        }
    }], [{
        key: 'getInitialProps',

        // Used soelly by Next.js since componentDidMount() works only with React and not Next
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Campaigns;
}(_react.Component);

exports.default = Campaigns;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiTGF5b3V0IiwiY2FtcGFpZ25GYWN0b3J5SW5zdGFuY2UiLCJDYW1wYWlnbnMiLCJzdGF0ZSIsImNhbXBhaWducyIsIml0ZW1zIiwicHJvcHMiLCJtYXAiLCJoZWFkZXIiLCJjYW1wYWlnbkFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWFyZ2luVG9wIiwicmVuZGVyQ2FtcGFpZ25zIiwiZm9udFNpemUiLCJtZXRob2RzIiwiZ2V0QWxsQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUE2Qjs7Ozs7Ozs7O0ksQUFFOUI7Ozs7Ozs7Ozs7Ozs7O3NOQUVGLEE7dUJBQVEsQUFDTyxBO0FBRFAsQUFDSjs7Ozs7MENBU2MsQUFFZDs7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksMkJBQW1CLEFBQ3REOzs0QkFBTyxBQUNLLEFBQ1I7aURBQWEsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBRlYsQUFFVSxBQUNiOzJCQUhKLEFBQU8sQUFHSSxBQUVkO0FBTFUsQUFDSDtBQUZSLEFBQWMsQUFRZCxhQVJjOztpREFRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYSxVQUFVLFNBQXBDLEFBQTRDLGNBQWEsV0FBekQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyx3QkFIVCxBQUNJLEFBRUssQUFBSyxBQUVWLG9DQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUJBQUEsQUFBQyx5Q0FBTyxPQUFPLEVBQUMsVUFBaEIsQUFBZSxBQUFXLFVBQVMsVUFBbkMsQUFBNkM7OEJBQTdDO2dDQUFBO0FBQUE7ZUFFSTs7OEJBQUE7Z0NBRkosQUFFSSxBQUFLO0FBQUw7QUFBQTs7OEJBQUs7Z0NBRlQsQUFFUztBQUFBO0FBQUEsZ0JBWjdCLEFBQ0ksQUFDSSxBQUNJLEFBS0ksQUFFSSxBQVN2Qjs7O2FBdkNEOzs7Ozs7Ozs7Ozt1Q0FFNEIsMEJBQUEsQUFBd0IsUUFBeEIsQUFBZ0Msa0JBQWhDLEEsQUFBa0Q7O2lDQUFwRTtBO2lFQUNDLEVBQUUsV0FBRixBLEFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUSixBLEFBaUR4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9