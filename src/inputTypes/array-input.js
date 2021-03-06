import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {findWhere} from 'lodash';
import Collapsible from 'react-collapsible';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import Question from '../question';


class ArrayInput extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    name        : undefined,
    id          : undefined,
    value       : [],
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
    let value = this.state.value || [];
    const description = this.props.description;
    const count = value.length;

    const header = (
      <ListItem
        disabled={true}
        rightIcon={
          <RaisedButton label="Add" secondary={true} onTouchTap={this.addItem}/>
        }>
        {description} ({count})
      </ListItem>
    )


    return (
      <div>
        {header}
        {this.renderQuestions(value)}
      </div>
    );
  }

  renderQuestions = (value) => {
    let questions = value.map((item, index) => {
      const label = this.props.id;

      const header = (
        <ListItem
          disabled={true}
          rightIcon={
            <IconButton tooltip="Remove Item" onTouchTap={this.removeItem.bind(this, index)} style={{marginLeft:200}}>
              <RemoveIcon/>
            </IconButton>
          }
          leftAvatar={
            <Avatar>{index+1}</Avatar>
          }
          >
          {`${label}-item`}
        </ListItem>
      )

      let questionRenderers = this.renderQuestion(item, index);

      return (
        <List key={`nested${index}`}>
          <Collapsible trigger={header}>
            {questionRenderers}
          </Collapsible>

        </List>

      )
      // value={this.props.questionAnswers[question.questionId]}
    });

    return questions;
  }

  renderQuestion(item, index) {
    let result = [];
    for(let key in item) {
      let question = this.getQuestion(key);
      let questionItem = (
        <Question key={`${question.questionId}_${index}`}
          questionSetId={this.props.id}
          questionId={question.questionId}
          question={question.question}
          validateOn={question.validateOn}
          validations={question.validations}
          text={question.text}
          value={item[key]}
          postText={question.postText}
          input={question.input}
          classes={this.props.classes}
          renderError={this.props.renderError}
          renderRequiredAsterisk={this.props.renderRequiredAsterisk}
          questionAnswers={this.props.questionAnswers}
          validationErrors={this.props.validationErrors}
          onAnswerChange={this.handleAnswerChange.bind(this,index)}
          onQuestionBlur={this.props.onQuestionBlur}
          onKeyDown={this.props.onKeyDown} />
      )
      result.push(questionItem);
    }
    return result;
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    }, this.props.onChange.bind(null, event.target.value));
  };

  getQuestion(key) {
    let result = findWhere(this.props.elements.questions,{questionId:key});
    return result;
  }

  addItem = () => {
    let value = this.state.value && this.state.value.slice(0) || [];
    let questions = this.props.elements.questions;
    let newItem = {};
    for(let item of questions){
      newItem[item.questionId] = null;
    }

    value.push(newItem);
    this.setState({
      value:value
    },this.props.onChange.bind(null,value));
  }

  removeItem = (itemIndex) => {
    let value = this.state.value.slice(0);
    if(itemIndex>=0){
      value.splice(itemIndex,1);
      this.setState({
        value:value
      }, this.props.onChange.bind(null, value));
    }
  }

  handleAnswerChange = (index, questionId, questionAnswer, validations, validateOn) => {
    let value = this.state.value.slice(0);
    value[index][questionId] = questionAnswer;
    this.setState({
      value:value
    }, this.props.onChange.bind(null, value));
  }
}

module.exports = ArrayInput;
