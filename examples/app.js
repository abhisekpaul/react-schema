var React      = window.React = require('react');
import TextField from 'material-ui/TextField';
var ReactDOM      = window.ReactDOM = require('react-dom');
import {cloneDeep} from 'lodash';
import { Router, IndexRedirect, Route, hashHistory } from 'react-router';
import RequestUtil from './RequestUtil';

var SchemaExample = require('./SchemaExample');

var schema      = require('./schema');
var loginSchema = require('./loginSchema');
var loginSchema2 = null;
var questionAnswers = []

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var onRender = () => {
  console.log('Great news! React schema rendered successfully');
};

var onClick = () => {
};

var onUpdate = (questionAnswers, questionId, questionAnswer) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);

  if(questionId === 'images' && questionAnswer) {
    let files = [questionAnswer.file];
    console.log(questionAnswers);
    if(questionAnswer.type === "ADD") {
      let payload = new FormData();
      for(let file of files) {
        payload.append(file.name, file);
      }
      const url = `http://localhost:5000/api/v1/upload`;
      let options = {
        url: url,
        binary:true,
        body:payload
      }
      RequestUtil.post(options);
    }
  }
};


var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
};

window.onload = function() {
  ReactDOM.render(
    <div>
      <SchemaExample schema={loginSchema}
              onSubmit={onSubmit}
                  onRender={onRender}
                  onUpdate={onUpdate}
                  disableSubmit={true}
                  renderRequiredAsterisk={() => <span>{'*'}</span>} />

    </div>,
    document.getElementById('login-form')
  );

};
