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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiSelect = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(MultiSelect, _React$Component);

  function MultiSelect(props) {
    (0, _classCallCheck3.default)(this, MultiSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MultiSelect.__proto__ || (0, _getPrototypeOf2.default)(MultiSelect)).call(this, props));

    _this.handleChange = function (value) {
      if (_this.props.ensureArray) {
        value = value.split(',');
      }
      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(MultiSelect, [{
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
      var options = this.props.options && this.props.options.map(function (opt, index) {
        return {
          value: opt.value,
          label: opt.text
        };
      }) || [];
      return _react2.default.createElement(_reactSelect2.default, {
        id: this.props.id,
        backspaceToRemoveMessage: '',
        multi: this.props.multi,
        simpleValue: this.props.simpleValue,
        placeholder: this.props.placeholder,
        value: this.state.value,
        options: options,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown });
    }
  }]);
  return MultiSelect;
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


module.exports = MultiSelect;