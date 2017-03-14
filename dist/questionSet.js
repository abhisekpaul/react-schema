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

var _List = require('material-ui/List');

var _question = require('./question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var _ = require('lodash').noConflict();

var QuestionSet = function (_React$Component) {
  (0, _inherits3.default)(QuestionSet, _React$Component);

  function QuestionSet() {
    (0, _classCallCheck3.default)(this, QuestionSet);
    return (0, _possibleConstructorReturn3.default)(this, (QuestionSet.__proto__ || (0, _getPrototypeOf2.default)(QuestionSet)).apply(this, arguments));
  }

  (0, _createClass3.default)(QuestionSet, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var questions = this.props.questions.map(function (question) {
        return React.createElement(
          _List.ListItem,
          { disabled: true },
          React.createElement(_question2.default, { key: question.questionId,
            questionSetId: _this2.props.id,
            questionId: question.questionId,
            question: question.question,
            validateOn: question.validateOn,
            validations: question.validations,
            text: question.text,
            postText: question.postText,
            value: _this2.props.questionAnswers[question.questionId],
            input: question.input,
            classes: _this2.props.classes,
            renderError: _this2.props.renderError,
            renderRequiredAsterisk: _this2.props.renderRequiredAsterisk,
            questionAnswers: _this2.props.questionAnswers,
            validationErrors: _this2.props.validationErrors,
            onAnswerChange: _this2.props.onAnswerChange,
            onQuestionBlur: _this2.props.onQuestionBlur,
            onKeyDown: _this2.props.onKeyDown })
        );
      });

      var header = React.createElement(
        'div',
        { className: this.props.classes.questionSet },
        typeof this.props.questionSetHeader !== 'undefined' || typeof this.props.questionSetText !== 'undefined' ? React.createElement(
          'div',
          { className: this.props.classes.questionSetHeaderContainer },
          typeof this.props.questionSetHeader !== 'undefined' ? React.createElement(
            'h4',
            { className: this.props.classes.questionSetHeader },
            this.props.questionSetHeader
          ) : undefined,
          typeof this.props.questionSetText !== 'undefined' ? React.createElement(
            'p',
            { className: this.props.classes.questionSetText },
            this.props.questionSetText
          ) : undefined
        ) : undefined
      );

      return React.createElement(
        _List.List,
        null,
        React.createElement(_List.ListItem, {
          primaryText: header,
          initiallyOpen: true,
          primaryTogglesNestedList: true,
          nestedItems: questions })
      );
    }
  }]);
  return QuestionSet;
}(React.Component);

;

QuestionSet.defaultProps = {
  id: undefined,
  name: '',
  questionSetHeader: undefined,
  questionSetText: undefined,
  questions: [],
  questionAnswers: {},
  classes: {},
  validationErrors: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: function onAnswerChange() {},
  onQuestionBlur: function onQuestionBlur() {},
  onKeyDown: function onKeyDown() {}
};

module.exports = QuestionSet;