'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialTextField = function (_React$Component) {
  _inherits(MaterialTextField, _React$Component);

  function MaterialTextField(props) {
    _classCallCheck(this, MaterialTextField);

    var _this = _possibleConstructorReturn(this, (MaterialTextField.__proto__ || Object.getPrototypeOf(MaterialTextField)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      }, _this.props.onChange.bind(null, event.target.value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(MaterialTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var autoComplete = this.props.autoComplete ? this.props.autoComplete : 'off';
      return _react2.default.createElement(_TextField2.default, {
        id: this.props.id,
        type: this.props.type,
        fullWidth: this.props.fullWidth,
        multiLine: this.props.multiLine,
        rows: this.props.rows,
        hintText: this.props.hintText,
        floatingLabelText: this.props.floatingLabelText,
        disabled: this.props.disabled,
        value: this.state.value,
        onChange: this.handleChange,
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown,
        autoComplete: autoComplete });
    }
  }]);

  return MaterialTextField;
}(_react2.default.Component);

MaterialTextField.propTypes = {};
MaterialTextField.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};


module.exports = MaterialTextField;