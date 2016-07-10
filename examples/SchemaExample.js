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

  render() {

    return(
      <Winterfell {...this.props} />
    );
  }
}

module.exports = SchemaExample;
