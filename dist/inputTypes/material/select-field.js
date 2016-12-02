'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialSelectField = function (_React$Component) {
  _inherits(MaterialSelectField, _React$Component);

  function MaterialSelectField(props) {
    _classCallCheck(this, MaterialSelectField);

    var _this = _possibleConstructorReturn(this, (MaterialSelectField.__proto__ || Object.getPrototypeOf(MaterialSelectField)).call(this, props));

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

  _createClass(MaterialSelectField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        this.setState({
          value: props.value
        }, this.props.onChange.bind(null, props.value));
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
}(_react2.default.Component);

MaterialSelectField.propTypes = {};
MaterialSelectField.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
};


module.exports = MaterialSelectField;