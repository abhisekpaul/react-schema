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

var CheckboxInput = function (_React$Component) {
  (0, _inherits3.default)(CheckboxInput, _React$Component);

  function CheckboxInput(props) {
    (0, _classCallCheck3.default)(this, CheckboxInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxInput.__proto__ || (0, _getPrototypeOf2.default)(CheckboxInput)).call(this, props));

    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  (0, _createClass3.default)(CheckboxInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var _this2 = this;

      if (e) {
        this.setState({
          'checked': !this.state.checked
        }, function () {
          _this2.props.onChange(_this2.state.checked ? _this2.props.value : undefined);
        });
      } else {
        this.props.onChange(this.state.checked ? this.props.value : undefined);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.checked) {
        this.handleChange();
      }
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
      return React.createElement(
        'div',
        { className: this.props.classes.checkboxInput },
        React.createElement(
          'label',
          { className: this.props.classes.checkboxLabel,
            id: this.props.labelId },
          React.createElement('input', { type: 'checkbox',
            name: this.props.name,
            'aria-labelledby': this.props.labelId,
            className: this.props.classes.checkbox,
            defaultChecked: this.state.checked,
            value: this.props.value,
            required: this.props.required ? 'required' : undefined,
            onChange: this.handleChange.bind(this),
            onBlur: this.props.onBlur.bind(null, this.state.checked ? this.props.value : undefined) }),
          this.props.text
        )
      );
    }
  }]);
  return CheckboxInput;
}(React.Component);

;

CheckboxInput.defaultProps = {
  text: '',
  defaultChecked: false,
  classes: {},
  name: undefined,
  value: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = CheckboxInput;