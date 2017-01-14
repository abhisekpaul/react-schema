'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_React$Component) {
  _inherits(FileUpload, _React$Component);

  function FileUpload(props) {
    _classCallCheck(this, FileUpload);

    var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

    _this.onDrop = function (files) {
      _this.setState({
        value: files
      }, _this.props.onChange.bind(null, files));
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
        }, this.props.onChange.bind(null, props.value));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactDropzone2.default,
          { onDrop: this.onDrop, id: this.props.id, disableClick: this.props.disableClick,
            multiple: this.props.multiple },
          _react2.default.createElement(
            'div',
            null,
            this.props.dropMessage
          )
        ),
        this.state.value ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Uploading ',
            this.state.value.length,
            ' files...'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.state.value.map(function (file) {
              return _react2.default.createElement('img', { src: file.preview, width: '100px', height: '100%' });
            })
          )
        ) : null
      );
    }
  }]);

  return FileUpload;
}(_react2.default.Component);

FileUpload.propTypes = {};
FileUpload.defaultProps = {
  classes: {},
  value: undefined,
  onChange: function onChange() {},
  dropMessage: 'Try dropping some files here, or click to select files to upload.',
  disableClick: false,
  multiple: false
};


module.exports = FileUpload;