import React from 'react';
import TextField from 'material-ui/TextField';

class MaterialTextInput extends React.Component {

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
        className={this.props.classes.materialInput}
          {...this.props}/>
      );
    }
  }

module.exports = MaterialTextInput;