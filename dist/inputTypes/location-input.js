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

var _reactGeosuggest = require('react-geosuggest');

var _reactGeosuggest2 = _interopRequireDefault(_reactGeosuggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationInput = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(LocationInput, _React$Component);

  function LocationInput(props) {
    (0, _classCallCheck3.default)(this, LocationInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LocationInput.__proto__ || (0, _getPrototypeOf2.default)(LocationInput)).call(this, props));

    _this.handleChange = function (value) {
      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(LocationInput, [{
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
      var google = window.google;
      if (!google) return null;

      var label = this.state.value && this.state.value.label || this.props.initialValue;
      var location = google && new google.maps.LatLng(53.558572, 9.9278215);
      return _react2.default.createElement(_reactGeosuggest2.default, {
        placeholder: this.props.placeholder,
        inputClassName: this.props.classes.input,
        initialValue: label,
        onSuggestSelect: this.handleChange.bind(this),
        location: location,
        radius: this.props.radius,
        country: this.props.country,
        autoActivateFirstSuggest: this.props.autoActivateFirstSuggest,
        value: this.state.value,
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown });
    }
  }]);
  return LocationInput;
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


module.exports = LocationInput;