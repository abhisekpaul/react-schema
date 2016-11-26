'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGeosuggest = require('react-geosuggest');

var _reactGeosuggest2 = _interopRequireDefault(_reactGeosuggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationInput = function (_React$Component) {
  _inherits(LocationInput, _React$Component);

  function LocationInput(props) {
    _classCallCheck(this, LocationInput);

    var _this = _possibleConstructorReturn(this, (LocationInput.__proto__ || Object.getPrototypeOf(LocationInput)).call(this, props));

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

  _createClass(LocationInput, [{
    key: 'render',
    value: function render() {
      var google = window.google;
      if (!google) return null;

      var location = google && new google.maps.LatLng(53.558572, 9.9278215);
      return _react2.default.createElement(_reactGeosuggest2.default, {
        placeholder: this.props.placeholder,
        inputClassName: this.props.classes.input,
        initialValue: this.props.initialValue,
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
}(_react2.default.Component);

LocationInput.propTypes = {};
LocationInput.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};


module.exports = LocationInput;