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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _themeManager = require('material-ui/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var _ = require('lodash').noConflict();

var QuestionPanel = require('./questionPanel');

var ReactSchema = function (_React$Component) {
  (0, _inherits3.default)(ReactSchema, _React$Component);

  function ReactSchema(props) {
    (0, _classCallCheck3.default)(this, ReactSchema);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReactSchema.__proto__ || (0, _getPrototypeOf2.default)(ReactSchema)).call(this, props));

    _this.panelHistory = [];

    var schema = _.extend({
      classes: {},
      formPanels: [],
      questionPanels: [],
      questionSets: []
    }, _this.props.schema);

    schema.formPanels = schema.formPanels.sort(function (a, b) {
      return a.index > b.index;
    });

    var panelId = typeof _this.props.panelId !== 'undefined' ? _this.props.panelId : schema.formPanels.length > 0 ? schema.formPanels[0].panelId : undefined;

    var currentPanel = typeof schema !== 'undefined' && typeof schema.formPanels !== 'undefined' && typeof panelId !== 'undefined' ? _.find(schema.formPanels, function (panel) {
      return panel.panelId == panelId;
    }) : undefined;

    if (!currentPanel) {
      throw new Error('ReactSchema: Could not find initial panel and failed to render.');
    }

    _this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: _this.props.action,
      questionAnswers: _this.props.questionAnswers
    };
    return _this;
  }

  (0, _createClass3.default)(ReactSchema, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        action: nextProps.action,
        schema: nextProps.schema,
        questionAnswers: nextProps.questionAnswers
      });
    }
  }, {
    key: 'handleAnswerChange',
    value: function handleAnswerChange(questionId, questionAnswer) {
      var questionAnswers = _.chain(this.state.questionAnswers).set(questionId, questionAnswer).value();

      this.setState({
        questionAnswers: questionAnswers
      }, this.props.onUpdate.bind(null, questionAnswers, questionId, questionAnswer));
    }
  }, {
    key: 'handleSwitchPanel',
    value: function handleSwitchPanel(panelId, preventHistory) {
      var panel = _.find(this.props.schema.formPanels, {
        panelId: panelId
      });

      if (!panel) {
        throw new Error('ReactSchema: Tried to switch to panel "' + panelId + '", which does not exist.');
      }

      if (!preventHistory) {
        this.panelHistory.push(panel.panelId);
      }

      this.setState({
        currentPanel: panel
      }, this.props.onSwitchPanel.bind(null, panel));
    }
  }, {
    key: 'handleBackButtonClick',
    value: function handleBackButtonClick() {
      this.panelHistory.pop();

      this.handleSwitchPanel.call(this, this.panelHistory[this.panelHistory.length - 1], true);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(action) {
      var _this2 = this;

      if (this.props.disableSubmit) {
        this.props.onSubmit(this.state.questionAnswers, action);
        return;
      }

      /*
       * If we are not disabling the functionality of the form,
       * we need to set the action provided in the form, then submit.
       */
      this.setState({
        action: action
      }, function () {
        _reactDom2.default.findDOMNode(_this2.refs[_this2.props.ref]).submit();
      });
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      this.refs["questionPanel"].submitForm();
    }
  }, {
    key: 'backForm',
    value: function backForm() {
      this.refs["questionPanel"].backForm();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var currentPanel = _.find(this.state.schema.questionPanels, function (panel) {
        return panel.panelId == _this3.state.currentPanel.panelId;
      });

      return React.createElement(
        'form',
        { method: this.props.method,
          encType: this.props.encType,
          action: this.state.action,
          className: this.state.schema.classes.form },
        React.createElement(
          'div',
          { className: this.state.schema.classes.questionPanels },
          React.createElement(QuestionPanel, { schema: this.state.schema,
            ref: 'questionPanel',
            classes: this.state.schema.classes,
            panelId: currentPanel.panelId,
            panelIndex: currentPanel.panelIndex,
            panelHeader: currentPanel.panelHeader,
            panelText: currentPanel.panelText,
            action: currentPanel.action,
            button: currentPanel.button,
            disableDefaultButton: currentPanel.disableDefaultButton,
            backButton: currentPanel.backButton,
            questionSets: currentPanel.questionSets,
            questionAnswers: this.state.questionAnswers,
            panelHistory: this.panelHistory,
            renderError: this.props.renderError,
            renderRequiredAsterisk: this.props.renderRequiredAsterisk,
            onAnswerChange: this.handleAnswerChange.bind(this),
            onPanelBack: this.handleBackButtonClick.bind(this),
            onSwitchPanel: this.handleSwitchPanel.bind(this),
            onSubmit: this.handleSubmit.bind(this),
            disableSubmit: this.props.disableSubmit,
            onError: this.props.onError,
            onAnswerError: this.props.onAnswerError })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.panelHistory.push(this.state.currentPanel.panelId);
      this.props.onRender();
    }
  }]);
  return ReactSchema;
}(React.Component);

;

// @todo: Proptypes
ReactSchema.defaultProps = {
  schema: {
    formPanels: [],
    questionPanels: [],
    questionSets: [],
    classes: {}
  },
  questionAnswers: {},
  ref: 'form',
  encType: 'application/x-www-form-urlencoded',
  method: 'POST',
  action: '',
  panelId: undefined,
  disableSubmit: false,
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  onSubmit: function onSubmit() {},
  onUpdate: function onUpdate() {},
  onSwitchPanel: function onSwitchPanel() {},
  onRender: function onRender() {},
  onAnswerError: undefined,
  onError: undefined
};

ReactSchema.inputTypes = require('./inputTypes');
ReactSchema.errorMessages = require('./lib/errors');
ReactSchema.validation = require('./lib/validation');

ReactSchema.addInputType = ReactSchema.inputTypes.addInputType;
ReactSchema.addInputTypes = ReactSchema.inputTypes.addInputTypes;

ReactSchema.addErrorMessage = ReactSchema.errorMessages.addErrorMessage;
ReactSchema.addErrorMessages = ReactSchema.errorMessages.addErrorMessages;

ReactSchema.addValidationMethod = ReactSchema.validation.addValidationMethod;
ReactSchema.addValidationMethods = ReactSchema.validation.addValidationMethods;

module.exports = ReactSchema;