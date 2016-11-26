var React      = window.React = require('react');
import TextField from 'material-ui/TextField';
var ReactDOM      = window.ReactDOM = require('react-dom');
import {cloneDeep} from 'lodash';
import { Router, IndexRedirect, Route, hashHistory } from 'react-router';

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
    loginSchema2 = cloneDeep(loginSchema);
    ReactDOM.render(
    <div>
          <SchemaExample schema={loginSchema2}
                      questionAnswers={questionAnswers}
                      onRender={onRender}
                      onUpdate={onUpdate}
                      renderRequiredAsterisk={() => <span>{'*'}</span>} />
    </div>,
    document.getElementById('login-form2')
  );
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};
var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

window.onload = function() {
  ReactDOM.render(
    <div>
      <button onClick={onClick}>click me</button>

      <SchemaExample schema={loginSchema}
                  onRender={onRender}
                  onUpdate={onUpdate}
                  disableSubmit={true}
                  renderRequiredAsterisk={() => <span>{'*'}</span>} />

    </div>,
    document.getElementById('login-form')
  );


  // ReactDOM.render(
  //   <SchemaExample schema={schema}
  //               disableSubmit={true}
  //               onRender={onRender}
  //               onUpdate={onUpdate}
  //               onSwitchPanel={onSwitchPanel}
  //               onSubmit={onSubmit} />,
  //   document.getElementById('form')
  // );

  /*
   * JSON View
   */
  $('#json-view')
    .JSONView($('#json-view').html());

  $('#login-json-view')
    .JSONView($('#login-json-view').html());
};
