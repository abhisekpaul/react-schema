import React from 'react';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Winterfell from '../src/index';

class SchemaExample extends React.Component{

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: this.props.muiTheme || getMuiTheme(),
    };
  }

  constructor(props, context){
    super(props, context);
  }

  onNextClick(e) {
    this.refs["myform"].submitForm();
  }

  render() {

    return(
      <div>
        <TextField onChange={this.onNextClick.bind(this)}/>
        <Winterfell {...this.props} ref="myform"/>
        <button ref="nextButton" onClick={this.onNextClick.bind(this)}>This is a custom next button</button>
      </div>
    );
  }
}

module.exports = SchemaExample;
