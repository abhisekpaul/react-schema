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

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RichTextArea = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(RichTextArea, _React$Component);

  function RichTextArea(props) {
    (0, _classCallCheck3.default)(this, RichTextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RichTextArea.__proto__ || (0, _getPrototypeOf2.default)(RichTextArea)).call(this, props));

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

  (0, _createClass3.default)(RichTextArea, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.value !== props.value) {
        var value = props.value;
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var DEFAULT_MODULES = {
        toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline', 'blockquote'], [{ 'list': 'ordered' }, { 'list': 'bullet' }]]
      };

      var DEFAULT_FORMATS = ['header', 'bold', 'italic', 'underline', 'blockquote', 'list', 'bullet'];

      var modules = this.props.modules || DEFAULT_MODULES;
      var formats = this.props.formats || DEFAULT_FORMATS;

      var value = this.state.value;
      return _react2.default.createElement(_reactQuill2.default, { value: value,
        'aria-labelledby': this.props.labelId,
        required: this.props.required ? 'required' : undefined,
        id: this.props.id,
        name: this.props.name,
        placeholder: this.props.placeholder,
        modules: modules,
        formats: formats,
        onChange: this.handleChange,
        onBlur: this.props.onBlur.bind(null, this.state.value),
        onKeyDown: this.props.onKeyDown });
    }
  }]);
  return RichTextArea;
}(_react2.default.Component), _class.propTypes = {}, _class.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {}
}, _temp);
;

module.exports = RichTextArea;