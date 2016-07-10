import React from 'react';
import TextField from 'material-ui/TextField';

class MaterialTextField extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TextField
        id={this.props.id}
          {...this.props}/>
      );
    }
  }

module.exports = MaterialTextField;
