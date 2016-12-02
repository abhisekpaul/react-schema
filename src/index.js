var React = require('react');
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import themeManager from 'material-ui/styles/themeManager';
var _  = require('lodash').noConflict();

var QuestionPanel = require('./questionPanel');

class ReactSchema extends React.Component {

  constructor(props) {
    super(props);

    this.panelHistory = [];

    var schema = _.extend({
      classes        : {},
      formPanels     : [],
      questionPanels : [],
      questionSets   : []
    }, this.props.schema);

    schema.formPanels = schema.formPanels
                              .sort((a, b) => a.index > b.index);

    var panelId = (typeof this.props.panelId !== 'undefined'
                     ? this.props.panelId
                     : schema.formPanels.length > 0
                         ? schema.formPanels[0].panelId
                         : undefined);

    var currentPanel = typeof schema !== 'undefined'
                         && typeof schema.formPanels !== 'undefined'
                         && typeof panelId !== 'undefined'
                         ? _.find(schema.formPanels,
                               panel => panel.panelId == panelId)
                         : undefined;

    if (!currentPanel) {
      throw new Error('ReactSchema: Could not find initial panel and failed to render.');
    }

    this.state = {
      schema          : schema,
      currentPanel    : currentPanel,
      action          : this.props.action,
      questionAnswers : this.props.questionAnswers
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      action          : nextProps.action,
      schema          : nextProps.schema,
      questionAnswers : nextProps.questionAnswers
    });
  }

  handleAnswerChange(questionId, questionAnswer) {
    var questionAnswers = _.chain(this.state.questionAnswers)
                           .set(questionId, questionAnswer)
                           .value();

    this.setState({
      questionAnswers : questionAnswers,
    }, this.props.onUpdate.bind(null, questionAnswers, questionId, questionAnswer));
  }

  handleSwitchPanel(panelId, preventHistory) {
    var panel = _.find(this.props.schema.formPanels, {
      panelId : panelId
    });

    if (!panel) {
      throw new Error('ReactSchema: Tried to switch to panel "'
                      + panelId + '", which does not exist.');
    }

    if (!preventHistory) {
      this.panelHistory.push(panel.panelId);
    }

    this.setState({
      currentPanel : panel
    }, this.props.onSwitchPanel.bind(null, panel));
  }

  handleBackButtonClick() {
    this.panelHistory.pop();

    this.handleSwitchPanel.call(
      this, this.panelHistory[this.panelHistory.length - 1], true
    );
  }

  handleSubmit(action) {

    if (this.props.disableSubmit) {
      this.props.onSubmit(this.state.questionAnswers, action);
      return;
    }

    /*
     * If we are not disabling the functionality of the form,
     * we need to set the action provided in the form, then submit.
     */
    this.setState({
      action : action
    }, () => {
      ReactDOM.findDOMNode(this.refs[this.props.ref])
           .submit();
    });
  }

  submitForm() {
    this.refs["questionPanel"].submitForm();
  }

  backForm() {
    this.refs["questionPanel"].backForm();
  }

  render() {

    var currentPanel = _.find(this.state.schema.questionPanels,
                          panel => panel.panelId == this.state.currentPanel.panelId);

    return (
      <form method={this.props.method}
            encType={this.props.encType}
            action={this.state.action}
            className={this.state.schema.classes.form}>
        <div className={this.state.schema.classes.questionPanels}>
          <QuestionPanel schema={this.state.schema}
                         ref="questionPanel"
                         classes={this.state.schema.classes}
                         panelId={currentPanel.panelId}
                         panelIndex={currentPanel.panelIndex}
                         panelHeader={currentPanel.panelHeader}
                         panelText={currentPanel.panelText}
                         action={currentPanel.action}
                         button={currentPanel.button}
                         disableDefaultButton={currentPanel.disableDefaultButton}
                         backButton={currentPanel.backButton}
                         questionSets={currentPanel.questionSets}
                         questionAnswers={this.state.questionAnswers}
                         panelHistory={this.panelHistory}
                         renderError={this.props.renderError}
                         renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                         onAnswerChange={this.handleAnswerChange.bind(this)}
                         onPanelBack={this.handleBackButtonClick.bind(this)}
                         onSwitchPanel={this.handleSwitchPanel.bind(this)}
                         onSubmit={this.handleSubmit.bind(this)}
                        disableSubmit={this.props.disableSubmit}
                        onError={this.props.onError}
                        onAnswerError={this.props.onAnswerError}/>
        </div>
      </form>
    );
  }

  componentDidMount() {
    this.panelHistory.push(this.state.currentPanel.panelId);
    this.props.onRender();
  }

};

// @todo: Proptypes
ReactSchema.defaultProps = {
  schema                 : {
    formPanels     : [],
    questionPanels : [],
    questionSets   : [],
    classes        : {}
  },
  questionAnswers        : {},
  ref                    : 'form',
  encType                : 'application/x-www-form-urlencoded',
  method                 : 'POST',
  action                 : '',
  panelId                : undefined,
  disableSubmit          : false,
  renderError            : undefined,
  renderRequiredAsterisk : undefined,
  onSubmit               : () => {},
  onUpdate               : () => {},
  onSwitchPanel          : () => {},
  onRender               : () => {},
  onAnswerError          : undefined,
  onError                : undefined
};

ReactSchema.inputTypes    = require('./inputTypes');
ReactSchema.errorMessages = require('./lib/errors');
ReactSchema.validation    = require('./lib/validation');

ReactSchema.addInputType  = ReactSchema.inputTypes.addInputType;
ReactSchema.addInputTypes = ReactSchema.inputTypes.addInputTypes;

ReactSchema.addErrorMessage  = ReactSchema.errorMessages.addErrorMessage;
ReactSchema.addErrorMessages = ReactSchema.errorMessages.addErrorMessages;

ReactSchema.addValidationMethod  = ReactSchema.validation.addValidationMethod;
ReactSchema.addValidationMethods = ReactSchema.validation.addValidationMethods;

module.exports = ReactSchema;
