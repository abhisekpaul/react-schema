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

var CheckboxOptionsInput = function (_React$Component) {
  (0, _inherits3.default)(CheckboxOptionsInput, _React$Component);

  function CheckboxOptionsInput(props) {
    (0, _classCallCheck3.default)(this, CheckboxOptionsInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxOptionsInput.__proto__ || (0, _getPrototypeOf2.default)(CheckboxOptionsInput)).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(CheckboxOptionsInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var value = this.state.value;

      if (e.target.checked) {
        value.push(e.target.value);
      } else {
        value = value.filter(function (val) {
          return val != e.target.value;
        });
      }

      this.setState({
        value: value
      }, this.props.onChange.bind(null, value));
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
      var _this2 = this;

      return React.createElement(
        'ul',
        { className: this.props.classes.checkboxList },
        this.props.options.map(function (opt) {
          return React.createElement(
            'li',
            { key: opt.value,
              className: _this2.props.classes.checkboxListItem },
            React.createElement(
              'label',
              { className: _this2.props.classes.checkboxLabel,
                id: _this2.props.labelId },
              React.createElement('input', { type: 'checkbox',
                name: _this2.props.name,
                'aria-labelledby': _this2.props.labelId,
                value: opt.value,
                checked: _this2.state.value.indexOf(opt.value) > -1,
                className: _this2.props.classes.checkbox,
                required: _this2.props.required ? 'required' : undefined,
                onChange: _this2.handleChange.bind(_this2),
                onBlur: _this2.props.onBlur.bind(null, _this2.state.value) }),
              opt.text
            )
          );
        })
      );
    }
  }]);
  return CheckboxOptionsInput;
}(React.Component);

;

CheckboxOptionsInput.defaultProps = {
  classes: {},
  name: undefined,
  value: [],
  options: [],
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

module.exports = CheckboxOptionsInput;