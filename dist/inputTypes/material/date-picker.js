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

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _intlLocalesSupported = require('intl-locales-supported');

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimeFormat = void 0;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if ((0, _intlLocalesSupported2.default)(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  var IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

var MaterialDatePicker = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(MaterialDatePicker, _React$Component);

  function MaterialDatePicker(props) {
    (0, _classCallCheck3.default)(this, MaterialDatePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MaterialDatePicker.__proto__ || (0, _getPrototypeOf2.default)(MaterialDatePicker)).call(this, props));

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

  (0, _createClass3.default)(MaterialDatePicker, [{
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
      return _react2.default.createElement(_DatePicker2.default, {
        id: this.props.id,
        fullWidth: this.props.fullWidth,
        hintText: this.props.hintText,
        value: this.state.value,
        onChange: this.handleChange,
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown,
        formatDate: new DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format });
    }
  }]);
  return MaterialDatePicker;
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


module.exports = MaterialDatePicker;