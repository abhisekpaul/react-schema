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

var _reactDropzoneComponent = require('react-dropzone-component');

var _reactDropzoneComponent2 = _interopRequireDefault(_reactDropzoneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileUpload = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(FileUpload, _React$Component);

  function FileUpload(props) {
    (0, _classCallCheck3.default)(this, FileUpload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileUpload.__proto__ || (0, _getPrototypeOf2.default)(FileUpload)).call(this, props));

    _this.handleFileAdded = function (file) {
      var newValue = {
        file: file,
        type: 'ADD'
      };

      _this.setState({
        value: newValue
      }, _this.props.onChange.bind(null, newValue));
    };

    _this.removedfile = function (file) {
      var newValue = {
        file: file,
        type: 'REMOVE'
      };

      _this.setState({
        value: newValue
      }, _this.props.onChange.bind(null, newValue));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(FileUpload, [{
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
      var config = this.props.componentConfig;
      var djsConfig = this.props.djsConfig;

      // For a list of all possible events (there are many), see README.md!
      var eventHandlers = {
        addedfile: this.handleFileAdded,
        removedfile: this.removedfile
      };

      return _react2.default.createElement(_reactDropzoneComponent2.default, { config: config, eventHandlers: eventHandlers, djsConfig: djsConfig });
    }
  }]);
  return FileUpload;
}(_react2.default.Component), _class.propTypes = {}, _class.defaultProps = {
  classes: {},
  value: undefined,
  onChange: function onChange() {},
  componentConfig: {},
  djsConfig: {}
}, _temp);


module.exports = FileUpload;