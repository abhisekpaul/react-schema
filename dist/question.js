'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
var _ = require('lodash').noConflict();

var InputTypes = require('./inputTypes');

var Question = function (_React$Component) {
  (0, _inherits3.default)(Question, _React$Component);

  function Question() {
    (0, _classCallCheck3.default)(this, Question);
    return (0, _possibleConstructorReturn3.default)(this, (Question.__proto__ || (0, _getPrototypeOf2.default)(Question)).apply(this, arguments));
  }

  (0, _createClass3.default)(Question, [{
    key: 'handleInputChange',
    value: function handleInputChange(questionId, value) {
      var result = value && value.target ? value.target.value : value;
      this.props.onAnswerChange(questionId, result, this.props.validations, this.props.validateOn);
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(questionId, value) {
      var result = value && value.target ? value.target.value : value;
      this.props.onQuestionBlur(questionId, result, this.props.validations, this.props.validateOn);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Input = InputTypes[this.props.input.type];
      if (!Input) {
        throw new Error('ReactSchema: Input Type "' + this.props.input.type + '" not defined as ReactSchema Input Type');
      }

      /*
       * Conditional Questions
       */
      var conditionalItems = [];
      if (typeof this.props.input.options !== 'undefined') {
        this.props.input.options.filter(function (option) {
          return _this2.props.value instanceof Array ? _this2.props.value.indexOf(option.value) > -1 : _this2.props.value == option.value;
        }).filter(function (option) {
          return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
        }).forEach(function (option) {
          return [].forEach.bind(option.conditionalQuestions, function (conditionalQuestion) {
            conditionalItems.push(React.createElement(Question, { key: conditionalQuestion.questionId,
              questionSetId: _this2.props.questionSetId,
              questionId: conditionalQuestion.questionId,
              question: conditionalQuestion.question,
              text: conditionalQuestion.text,
              postText: conditionalQuestion.postText,
              validateOn: conditionalQuestion.validateOn,
              validations: conditionalQuestion.validations,
              value: _this2.props.questionAnswers[conditionalQuestion.questionId],
              input: conditionalQuestion.input,
              classes: _this2.props.classes,
              renderError: _this2.props.renderError,
              questionAnswers: _this2.props.questionAnswers,
              validationErrors: _this2.props.validationErrors,
              onAnswerChange: _this2.props.onAnswerChange,
              onQuestionBlur: _this2.props.onQuestionBlur,
              onKeyDown: _this2.props.onKeyDown }));
          })();
        });
      }

      var value = typeof this.props.value !== 'undefined' ? this.props.value : typeof this.props.input.default !== 'undefined' ? this.props.input.default : undefined;

      var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined' ? this.props.validationErrors[this.props.questionId].map(function (error) {
        return typeof _this2.props.renderError === 'function' ? _this2.props.renderError(error, _this2.props.questionId) : React.createElement(
          'div',
          { key: _this2.props.questionId + 'Error' + error.type,
            className: _this2.props.classes.errorMessage },
          error.message
        );
      }) : [];

      var extraprops = {};

      if (this.props.input.props) {
        extraprops = this.props.input.props;
      }

      var labelId = this.props.questionId + '-label';

      return React.createElement(
        'div',
        { className: this.props.classes.question },
        !!this.props.question ? React.createElement(
          'label',
          { className: this.props.classes.label,
            id: labelId,
            htmlFor: this.props.questionId },
          this.props.question,
          typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required ? this.props.renderRequiredAsterisk() : undefined
        ) : undefined,
        !!this.props.text ? React.createElement(
          'p',
          { className: this.props.classes.questionText },
          this.props.text
        ) : undefined,
        React.createElement(Input, (0, _extends3.default)({ name: this.props.questionId,
          id: this.props.questionId,
          labelId: labelId,
          value: value,
          text: this.props.input.text,
          options: this.props.input.options,
          placeholder: this.props.input.placeholder,
          required: this.props.input.required,
          classes: this.props.classes,
          onChange: this.handleInputChange.bind(this, this.props.questionId),
          onBlur: this.handleInputBlur.bind(this, this.props.questionId),
          onKeyDown: this.props.onKeyDown
        }, extraprops)),
        !!this.props.postText ? React.createElement(
          'p',
          { className: this.props.classes.questionPostText },
          this.props.postText
        ) : undefined,
        validationErrors,
        conditionalItems
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.input.default === 'undefined' || this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined') {
        return;
      }

      this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
    }
  }]);
  return Question;
}(React.Component);

;

Question.defaultProps = {
  questionSetId: undefined,
  questionId: undefined,
  question: '',
  validateOn: 'submit',
  validations: [],
  text: undefined,
  postText: undefined,
  value: undefined,
  input: {
    default: undefined,
    type: 'textInput',
    limit: undefined,
    placeholder: undefined
  },
  classes: {},
  questionAnswers: {},
  validationErrors: {},
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {},
  renderError: undefined,
  renderRequiredAsterisk: undefined
};

exports.default = Question;