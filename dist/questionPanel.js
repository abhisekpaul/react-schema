'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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
var KeyCodez = require('keycodez');

var Validation = require('./lib/validation');
var ErrorMessages = require('./lib/errors');

var Button = require('./button');
var QuestionSet = require('./questionSet');

var QuestionPanel = function (_React$Component) {
  (0, _inherits3.default)(QuestionPanel, _React$Component);

  function QuestionPanel(props) {
    (0, _classCallCheck3.default)(this, QuestionPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QuestionPanel.__proto__ || (0, _getPrototypeOf2.default)(QuestionPanel)).call(this, props));

    _this.state = {
      validationErrors: _this.props.validationErrors
    };
    return _this;
  }

  (0, _createClass3.default)(QuestionPanel, [{
    key: 'handleAnswerValidate',
    value: function handleAnswerValidate(questionId, questionAnswer, validations) {
      var _this2 = this;

      if (typeof validations === 'undefined' || validations.length === 0) {
        return;
      }

      /*
       * Run the question through its validations and
       * show any error messages if invalid.
       */
      var questionValidationErrors = [];
      validations.forEach(function (validation) {
        if (Validation.validateAnswer(questionAnswer, validation, _this2.props.questionAnswers)) {
          return;
        }

        questionValidationErrors.push({
          type: validation.type,
          message: ErrorMessages.getErrorMessage(validation)
        });
      });

      var validationErrors = _.chain(this.state.validationErrors).set(questionId, questionValidationErrors).value();

      if (questionValidationErrors && questionValidationErrors.length) {
        this.props.onAnswerError && this.props.onAnswerError(questionId, questionValidationErrors);
      }

      this.setState({
        validationErrors: validationErrors
      });
    }
  }, {
    key: 'handleMainButtonClick',
    value: function handleMainButtonClick() {
      var _this3 = this;

      var action = this.props.action.default;
      var conditions = this.props.action.conditions || [];

      /*
       * We need to get all the question sets for this panel.
       * Collate a list of the question set IDs required
       * and run through the schema to grab the question sets.
       */
      var questionSetIds = this.props.questionSets.map(function (qS) {
        return qS.questionSetId;
      });
      var questionSets = _.chain(this.props.schema.questionSets).filter(function (qS) {
        return questionSetIds.indexOf(qS.questionSetId) > -1;
      }).value();

      /*
       * Get any incorrect fields that need error messages.
       */
      var invalidQuestions = Validation.getQuestionPanelInvalidQuestions(questionSets, this.props.questionAnswers);

      /*
       * If the panel isn't valid...
       */
      if ((0, _keys2.default)(invalidQuestions).length > 0) {
        var validationErrors = _.mapValues(invalidQuestions, function (validations) {
          return validations.map(function (validation) {
            return {
              type: validation.type,
              message: ErrorMessages.getErrorMessage(validation)
            };
          });
        });

        this.props.onError && this.props.onError(validationErrors);

        this.setState({
          validationErrors: validationErrors
        });

        return;
      }

      /*
       * Panel is valid. So what do we do next?
       * Check our conditions and act upon them, or the default.
       */
      conditions.forEach(function (condition) {
        var answer = _this3.props.questionAnswers[condition.questionId];

        action = answer == condition.value ? {
          action: condition.action,
          target: condition.target
        } : action;
      });

      /*
       * Decide which action to take depending on
       * the action decided upon.
       */
      switch (action.action) {

        case 'GOTO':
          this.props.onSwitchPanel(action.target);
          break;

        case 'SUBMIT':
          this.props.onSubmit(action.target);
          break;
      }
    }
  }, {
    key: 'handleBackButtonClick',
    value: function handleBackButtonClick() {
      if (this.props.panelHistory.length == 0) {
        return;
      }

      this.props.onPanelBack();
    }
  }, {
    key: 'handleAnswerChange',
    value: function handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
      this.props.onAnswerChange(questionId, questionAnswer);

      this.setState({
        validationErrors: _.chain(this.state.validationErrors).set(questionId, []).value()
      });

      if (validateOn === 'change') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: 'handleQuestionBlur',
    value: function handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
      if (validateOn === 'blur') {
        this.handleAnswerValidate(questionId, questionAnswer, validations);
      }
    }
  }, {
    key: 'handleInputKeyDown',
    value: function handleInputKeyDown(e) {
      if (KeyCodez[e.keyCode] === 'enter' && !this.props.disableSubmit) {
        e.preventDefault();
        this.handleMainButtonClick.call(this);
      }
    }
  }, {
    key: 'renderDefaultButtons',
    value: function renderDefaultButtons() {
      return React.createElement(
        'div',
        { className: this.props.classes.buttonBar },
        this.props.panelHistory.length > 1 && !this.props.backButton.disabled ? React.createElement(Button, { text: this.props.backButton.text || 'Back',
          onClick: this.handleBackButtonClick.bind(this),
          className: this.props.classes.backButton }) : undefined,
        !this.props.button.disabled ? React.createElement(Button, { text: this.props.button.text,
          onClick: this.handleMainButtonClick.bind(this),
          className: this.props.classes.controlButton }) : undefined
      );
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      this.handleMainButtonClick();
    }
  }, {
    key: 'backForm',
    value: function backForm() {
      this.handleBackButtonClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var error = null;
      if (this.props.schema.showErrorSummary) {
        var isError = false;

        for (var key in this.state.validationErrors) {
          isError = isError || !_.isEmpty(this.state.validationErrors[key]);
        }
        if (isError) {
          error = this.props.schema.summaryErrorMessage || 'There are errors in your input. Please correct them and submit again.';
        }
      }

      var questionSets = this.props.questionSets.map(function (questionSetMeta) {
        var questionSet = _.find(_this4.props.schema.questionSets, {
          questionSetId: questionSetMeta.questionSetId
        });

        if (!questionSet) {
          return undefined;
        }

        return React.createElement(QuestionSet, { key: questionSet.questionSetId,
          id: questionSet.questionSetId,
          name: questionSet.name,
          questionSetHeader: questionSet.questionSetHeader,
          questionSetText: questionSet.questionSetText,
          questions: questionSet.questions,
          classes: _this4.props.classes,
          questionAnswers: _this4.props.questionAnswers,
          renderError: _this4.props.renderError,
          renderRequiredAsterisk: _this4.props.renderRequiredAsterisk,
          validationErrors: _this4.state.validationErrors,
          onAnswerChange: _this4.handleAnswerChange.bind(_this4),
          onQuestionBlur: _this4.handleQuestionBlur.bind(_this4),
          onKeyDown: _this4.handleInputKeyDown.bind(_this4),
          collapse: questionSet.collapse,
          collapsible: questionSet.collapsible });
      });

      return React.createElement(
        'div',
        { className: this.props.classes.questionPanel },
        typeof this.props.panelHeader !== 'undefined' || typeof this.props.panelText !== 'undefined' ? React.createElement(
          'div',
          { className: this.props.classes.questionPanelHeaderContainer },
          typeof this.props.panelHeader !== 'undefined' ? React.createElement(
            'h3',
            { className: this.props.classes.questionPanelHeaderText },
            this.props.panelHeader
          ) : undefined,
          typeof this.props.panelText !== 'undefined' ? React.createElement(
            'p',
            { className: this.props.classes.questionPanelText },
            this.props.panelText
          ) : undefined
        ) : undefined,
        error && React.createElement(
          'div',
          { className: this.props.schema.classes.errorContainer },
          '! ',
          error,
          ' '
        ),
        React.createElement(
          'div',
          { className: this.props.classes.questionSets },
          questionSets
        ),
        !this.props.disableDefaultButton ? this.renderDefaultButtons() : null
      );
    }
  }]);
  return QuestionPanel;
}(React.Component);

;

QuestionPanel.defaultProps = {
  disableDefaultButton: false,
  validationErrors: {},
  schema: {},
  classes: {},
  panelId: undefined,
  panelIndex: undefined,
  panelHeader: undefined,
  panelText: undefined,
  action: {
    default: {},
    conditions: []
  },
  button: {
    text: 'Submit'
  },
  backButton: {
    text: 'Back'
  },
  questionSets: [],
  questionAnswers: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onAnswerChange: function onAnswerChange() {},
  onSwitchPanel: function onSwitchPanel() {},
  onPanelBack: function onPanelBack() {},
  panelHistory: [],
  disableSubmit: false,
  onAnswerError: undefined,
  onError: undefined
};

module.exports = QuestionPanel;