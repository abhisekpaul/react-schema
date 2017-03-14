'use strict';

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var PasswordInput = function (_React$Component) {
  (0, _inherits3.default)(PasswordInput, _React$Component);

  function PasswordInput(props) {
    (0, _classCallCheck3.default)(this, PasswordInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PasswordInput.__proto__ || (0, _getPrototypeOf2.default)(PasswordInput)).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(PasswordInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
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
      return React.createElement('input', { type: 'password',
        name: this.props.name,
        id: this.props.id,
        'aria-labelledby': this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown });
    }
  }]);
  return PasswordInput;
}(React.Component);

;

PasswordInput.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};

module.exports = PasswordInput;