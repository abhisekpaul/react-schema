import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {findWhere, set, cloneDeep} from 'lodash';

import Question from '../question';


class ObjectInput extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    name        : undefined,
    id          : undefined,
    value       : {},
    placeholder : undefined,
    onChange    : () => {},
    onBlur      : () => {},
    onKeyDown   : () => {}
  };

  constructor(props){
    super(props);
    this.state = {
      value : this.props.value
    };
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  render() {
    let value = this.state.value || {};
    const description = this.props.description;
    let questions = this.props.elements && this.props.elements.questions || [];


    return (
      <div>
      {description}
      {this.renderQuestions(questions, value)}
      </div>
    );
  }

  renderQuestions(questions, value) {
    return questions.map( question => {
      const key = question.questionId;
      return (
        <Question key={`${question.questionId}_${this.props.id}`}
                  questionSetId={this.props.id}
                  questionId={question.questionId}
                  question={question.question}
                  validateOn={question.validateOn}
                  validations={question.validations}
                  text={question.text}
                  value={value[key]}
                  postText={question.postText}
                  input={question.input}
                  classes={this.props.classes}
                  renderError={this.props.renderError}
                  renderRequiredAsterisk={this.props.renderRequiredAsterisk}
                  questionAnswers={this.props.questionAnswers}
                  validationErrors={this.props.validationErrors}
                  onAnswerChange={this.handleChange.bind(this,this.props.id)}
                  onQuestionBlur={this.props.onQuestionBlur}
                  onKeyDown={this.props.onKeyDown} />
      );
    });
  }

  handleChange = (questionSetId, questionId, questionAnswer, validations, validateOn) => {
    let stateValue = this.state.value || {};
    let value = cloneDeep(stateValue);
    value[questionId] = questionAnswer;

    this.setState({
      value:value
    }, this.props.onChange.bind(null, value));
  }
}

module.exports = ObjectInput;
