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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _addBox = require('material-ui/svg-icons/content/add-box');

var _addBox2 = _interopRequireDefault(_addBox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _lodash = require('lodash');

var _question = require('../question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectInput = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ObjectInput, _React$Component);

  function ObjectInput(props) {
    (0, _classCallCheck3.default)(this, ObjectInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ObjectInput.__proto__ || (0, _getPrototypeOf2.default)(ObjectInput)).call(this, props));

    _this.handleChange = function (questionSetId, questionId, questionAnswer, validations, validateOn) {
      var value = _this.state.value;
      value[questionId] = questionAnswer;

      _this.setState({
        value: value
      }, _this.props.onChange.bind(null, value));
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  (0, _createClass3.default)(ObjectInput, [{
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
      var value = this.state.value || {};
      var description = this.props.description;
      var questions = this.props.elements && this.props.elements.questions || [];

      return _react2.default.createElement(
        'div',
        null,
        description,
        this.renderQuestions(questions, value)
      );
    }
  }, {
    key: 'renderQuestions',
    value: function renderQuestions(questions, value) {
      var _this2 = this;

      return questions.map(function (question) {
        var key = question.questionId;
        return _react2.default.createElement(_question2.default, { key: question.questionId + '_' + _this2.props.id,
          questionSetId: _this2.props.id,
          questionId: question.questionId,
          question: question.question,
          validateOn: question.validateOn,
          validations: question.validations,
          text: question.text,
          value: value[key],
          postText: question.postText,
          input: question.input,
          classes: _this2.props.classes,
          renderError: _this2.props.renderError,
          renderRequiredAsterisk: _this2.props.renderRequiredAsterisk,
          questionAnswers: _this2.props.questionAnswers,
          validationErrors: _this2.props.validationErrors,
          onAnswerChange: _this2.handleChange.bind(_this2, _this2.props.id),
          onQuestionBlur: _this2.props.onQuestionBlur,
          onKeyDown: _this2.props.onKeyDown });
      });
    }
  }]);
  return ObjectInput;
}(_react2.default.Component), _class.propTypes = {}, _class.defaultProps = {
  classes: {},
  name: undefined,
  id: undefined,
  value: {},
  placeholder: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {}
}, _temp);


module.exports = ObjectInput;