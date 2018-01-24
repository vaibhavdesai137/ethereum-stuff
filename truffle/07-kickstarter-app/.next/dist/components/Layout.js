'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaidesai/Development/git/vaibhavdesai137/ethereum-stuff/truffle/07-kickstarter-app/components/Layout.js';

exports.default = function (props) {

    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'Kickstartr Smart Contract'), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement(_Navbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), props.children, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRlciIsIk5hdmJhciIsIkZvb3RlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWSxBQUVuQjs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQVUsQUFFdEI7OzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBRUk7QUFGSjtBQUFBLEtBQUEsa0JBRUksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLHNFQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO3NCQUE1Qjt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBTFIsQUFFSSxBQUdJLEFBR0o7QUFISTt5QkFHSixBQUFDOztzQkFBRDt3QkFSSixBQVFJLEFBRUE7QUFGQTtBQUFBLHdCQUVBLEFBQUM7O3NCQUFEO3dCQVZKLEFBVUksQUFFQztBQUZEO0FBQUEsY0FWSixBQVlXLEFBRVAsMEJBQUEsQUFBQzs7c0JBQUQ7d0JBZlIsQUFDSSxBQWNJLEFBS1g7QUFMVztBQUFBO0FBakJaIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpZGVzYWkvRGV2ZWxvcG1lbnQvZ2l0L3ZhaWJoYXZkZXNhaTEzNy9ldGhlcmV1bS1zdHVmZi90cnVmZmxlLzA3LWtpY2tzdGFydGVyLWFwcCJ9