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

var _react3 = require('cleave.js/react');

var _react4 = _interopRequireDefault(_react3);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimeFormat = void 0;

var InlineDatePicker = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(InlineDatePicker, _React$Component);

    function InlineDatePicker(props) {
        (0, _classCallCheck3.default)(this, InlineDatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InlineDatePicker.__proto__ || (0, _getPrototypeOf2.default)(InlineDatePicker)).call(this, props));

        _this.handleChange = function (event) {
            var date = (0, _moment2.default)(event.target.value, "DD/MM/YYYY");
            // this.setState({
            //     value: date
            // }, this.props.onChange.bind(null, date));
        };

        _this.state = {
            value: _this.props.value
        };
        return _this;
    }

    (0, _createClass3.default)(InlineDatePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (this.props.value !== props.value) {
                this.setState({ value: props.value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_react4.default, { placeholder: 'dd/mm/YYYY', value: this.state.value,
                options: {
                    date: true,
                    datePattern: ['d', 'm', 'Y']
                },
                onChange: this.handleChange });
        }
    }]);
    return InlineDatePicker;
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


module.exports = InlineDatePicker;