import React from 'react';
import TextField from 'material-ui/TextField';

class MaterialTextField extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: ''
    };

  }

  render() {
    let value = this.state.value || '';
    return (
      <TextField
        id={this.props.id}
          {...this.props}/>
      );
    }
  }

module.exports = MaterialTextField;
