import React from 'react';
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
        <Winterfell {...this.props} ref="myform"/>
        <button ref="nextButton" onClick={this.onNextClick.bind(this)}>This is a custom next button</button>
      </div>
    );
  }
}

module.exports = SchemaExample;
