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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/pages/campaigns/spendingRequests/index.js?entry';


var SpendingRequestIndex = function (_Component) {
    (0, _inherits3.default)(SpendingRequestIndex, _Component);

    function SpendingRequestIndex() {
        (0, _classCallCheck3.default)(this, SpendingRequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (SpendingRequestIndex.__proto__ || (0, _getPrototypeOf2.default)(SpendingRequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(SpendingRequestIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/spendingRequests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { fontSize: '14px' }, positive: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Create New Spending Request'))));
        }
    }], [{
        key: 'getInitialProps',

        // Used solely by Next.js since componentDidMount() works only with React and not Next
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', { address: props.query.address });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return SpendingRequestIndex;
}(_react.Component);

exports.default = SpendingRequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zcGVuZGluZ1JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJTcGVuZGluZ1JlcXVlc3RJbmRleCIsInByb3BzIiwiYWRkcmVzcyIsImZvbnRTaXplIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUVuQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztpQ0FPTyxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyxPQUFPLGdCQUFnQixLQUFBLEFBQUssTUFBckIsQUFBMkIsVUFBeEMsQUFBa0Q7OEJBQWxEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQU8sRUFBRSxVQUFqQixBQUFlLEFBQVksVUFBVSxVQUFyQyxBQUErQzs4QkFBL0M7Z0NBQUE7QUFBQTtlQUpoQixBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBT25COzs7YUFqQkQ7Ozs7aUhBQzZCLEE7Ozs7O2lFQUNsQixFQUFFLFNBQVMsTUFBQSxBQUFNLE1BQWpCLEFBQXVCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKSCxBLEFBdUJuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9