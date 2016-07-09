'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiTextField = require('material-ui/TextField');

var _materialUiTextField2 = _interopRequireDefault(_materialUiTextField);

var _materialUiStylesBaseThemesLightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _materialUiStylesBaseThemesLightBaseTheme2 = _interopRequireDefault(_materialUiStylesBaseThemesLightBaseTheme);

var _materialUiStylesGetMuiTheme = require('material-ui/styles/getMuiTheme');

var _materialUiStylesGetMuiTheme2 = _interopRequireDefault(_materialUiStylesGetMuiTheme);

var MaterialTextInput = (function (_React$Component) {
  _inherits(MaterialTextInput, _React$Component);

  function MaterialTextInput(props) {
    _classCallCheck(this, MaterialTextInput);

    _get(Object.getPrototypeOf(MaterialTextInput.prototype), 'constructor', this).call(this, props);

    this.state = {
      value: 'input'
    };
  }

  _createClass(MaterialTextInput, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { muiTheme: (0, _materialUiStylesGetMuiTheme2['default'])(_materialUiStylesBaseThemesLightBaseTheme2['default']) };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event);
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value || '';
      return _react2['default'].createElement(_materialUiTextField2['default'], _extends({
        id: this.props.id,
        className: this.props.classes.materialInput,
        required: this.props.required,
        onChange: this.handleChange.bind(this),
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown
      }, this.props));
    }
  }]);

  return MaterialTextInput;
})(_react2['default'].Component);

MaterialTextInput.childContextTypes = {
  muiTheme: _react2['default'].PropTypes.object.isRequired
};

module.exports = MaterialTextInput;