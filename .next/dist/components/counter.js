"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/H/workspace/dev/github.com/HiroNonoyama/nextjs-counter-app/components/counter.js";


var Counter = function (_Component) {
  (0, _inherits3.default)(Counter, _Component);

  function Counter(props) {
    (0, _classCallCheck3.default)(this, Counter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

    _this.state = { count: 0 };

    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Counter, [{
    key: "increment",
    value: function increment() {
      this.setState({
        count: this.state.count + 1
      });
    }
  }, {
    key: "decrement",
    value: function decrement() {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, this.state.count), _react2.default.createElement("button", { onClick: this.increment, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "up"), _react2.default.createElement("button", { onClick: this.decrement, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "down"));
    }
  }]);

  return Counter;
}(_react.Component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY291bnRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvdW50ZXIiLCJwcm9wcyIsInN0YXRlIiwiY291bnQiLCJpbmNyZW1lbnQiLCJiaW5kIiwiZGVjcmVtZW50Iiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFSyxBO21DQUNuQjs7bUJBQUEsQUFBWSxPQUFPO3dDQUFBOzt3SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxRQUFRLEVBQUUsT0FBZixBQUFhLEFBQVMsQUFFdEI7O1VBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FBaEMsQUFDQTtVQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBTGYsQUFLakI7V0FDRDs7Ozs7Z0NBRVcsQUFDVjtXQUFBLEFBQUs7ZUFDSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBRHBCLEFBQWMsQUFDYyxBQUU3QjtBQUhlLEFBQ1o7Ozs7Z0NBSVEsQUFDVjtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBZixBQUF1QixHQUFHLEFBQ3hCO2FBQUEsQUFBSztpQkFDSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBRHBCLEFBQWMsQUFDYyxBQUU3QjtBQUhlLEFBQ1o7QUFHTDs7Ozs2QkFFUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsY0FBSSxBQUFLLE1BRFgsQUFDRSxBQUFlLEFBQ2Ysd0JBQUEsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBQ0EsdUJBQUEsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FKSixBQUNFLEFBR0UsQUFHTDs7Ozs7QUEvQmtDLEE7O2tCQUFoQixBIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0gvd29ya3NwYWNlL2Rldi9naXRodWIuY29tL0hpcm9Ob25veWFtYS9uZXh0anMtY291bnRlci1hcHAifQ==