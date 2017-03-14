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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaterialTextField = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(MaterialTextField, _React$Component);

  function MaterialTextField(props) {
    (0, _classCallCheck3.default)(this, MaterialTextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MaterialTextField.__proto__ || (0, _getPrototypeOf2.default)(MaterialTextField)).call(this, props));

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

  (0, _createClass3.default)(MaterialTextField, [{
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
}(_react2.default.Component), _class.propTypes = {}, _class.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
}, _temp);


module.exports = MaterialTextField;