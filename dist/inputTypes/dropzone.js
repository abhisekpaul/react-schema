'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropzone = require('dropzone');

var _dropzone2 = _interopRequireDefault(_dropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropzoneFileUpload = function (_React$Component) {
  _inherits(DropzoneFileUpload, _React$Component);

  function DropzoneFileUpload(props) {
    _classCallCheck(this, DropzoneFileUpload);

    var _this = _possibleConstructorReturn(this, (DropzoneFileUpload.__proto__ || Object.getPrototypeOf(DropzoneFileUpload)).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(DropzoneFileUpload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      new _dropzone2.default("div#dropzone", { url: "/file/post" });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'dropzone' });
    }
  }]);

  return DropzoneFileUpload;
}(_react2.default.Component);

DropzoneFileUpload.propTypes = {};
DropzoneFileUpload.defaultProps = {
  classes: {},
  value: undefined,
  onChange: function onChange() {},
  dropMessage: 'Try dropping some files here, or click to select files to upload.',
  disableClick: false,
  multiple: false
};


module.exports = DropzoneFileUpload;