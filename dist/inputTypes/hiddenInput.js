"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var HiddenInput = function (_React$Component) {
  (0, _inherits3.default)(HiddenInput, _React$Component);

  function HiddenInput(props) {
    (0, _classCallCheck3.default)(this, HiddenInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HiddenInput.__proto__ || (0, _getPrototypeOf2.default)(HiddenInput)).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(HiddenInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("input", { type: "hidden",
        name: this.props.name,
        value: this.state.value });
    }
  }]);
  return HiddenInput;
}(React.Component);

;

HiddenInput.defaultProps = {
  name: undefined,
  value: undefined
};

module.exports = HiddenInput;