'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialDatePicker = function (_React$Component) {
  _inherits(MaterialDatePicker, _React$Component);

  function MaterialDatePicker(props) {
    _classCallCheck(this, MaterialDatePicker);

    var _this = _possibleConstructorReturn(this, (MaterialDatePicker.__proto__ || Object.getPrototypeOf(MaterialDatePicker)).call(this, props));

    _this.handleChange = function (event, date) {
      _this.setState({
        value: date
      }, _this.props.onChange.bind(null, date));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(MaterialDatePicker, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_DatePicker2.default, {
        id: this.props.id,
        fullWidth: this.props.fullWidth,
        hintText: this.props.hintText,
        value: this.state.value,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown });
    }
  }]);

  return MaterialDatePicker;
}(_react2.default.Component);

MaterialDatePicker.propTypes = {};
MaterialDatePicker.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};


module.exports = MaterialDatePicker;