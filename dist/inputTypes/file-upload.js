'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzoneComponent = require('react-dropzone-component');

var _reactDropzoneComponent2 = _interopRequireDefault(_reactDropzoneComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_React$Component) {
  _inherits(FileUpload, _React$Component);

  function FileUpload(props) {
    _classCallCheck(this, FileUpload);

    var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

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

  _createClass(FileUpload, [{
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
}(_react2.default.Component);

FileUpload.propTypes = {};
FileUpload.defaultProps = {
  classes: {},
  value: undefined,
  onChange: function onChange() {},
  componentConfig: {},
  djsConfig: {}
};


module.exports = FileUpload;