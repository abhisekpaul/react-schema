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

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaterialSelectField = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(MaterialSelectField, _React$Component);

  function MaterialSelectField(props) {
    (0, _classCallCheck3.default)(this, MaterialSelectField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MaterialSelectField.__proto__ || (0, _getPrototypeOf2.default)(MaterialSelectField)).call(this, props));

    _this.handleChange = function (event, index, value) {
      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(MaterialSelectField, [{
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
      var options = this.props.options.map(function (opt, index) {
        return _react2.default.createElement(_MenuItem2.default, { key: index,
          value: opt.value, primaryText: opt.text });
      });

      return _react2.default.createElement(
        _SelectField2.default,
        {
          id: this.props.id,
          fullWidth: this.props.fullWidth,
          hintText: this.props.hintText,
          value: this.state.value,
          onChange: this.handleChange.bind(this),
          onBlur: this.props.onBlur.bind(null, this.state.value),
          onKeyDown: this.props.onKeyDown
        },
        options
      );
    }
  }]);
  return MaterialSelectField;
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


module.exports = MaterialSelectField;