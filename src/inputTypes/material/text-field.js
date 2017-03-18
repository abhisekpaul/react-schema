import React from 'react';
import TextField from 'material-ui/TextField';

class MaterialTextField extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    name        : undefined,
    id          : undefined,
    value       : undefined,
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

  handleChange = (event) => {
    let value = event.target.value;
    if(this.props.valueType === 'array'){
      value = [event.target.value];
    }
    this.setState({
      value: value,
    }, this.props.onChange.bind(null, value));
  };

  render() {
    const autoComplete = this.props.autoComplete ? this.props.autoComplete : 'off';
    let value = this.state.value;
    if(this.props.valueType === 'array' && this.state.value && this.state.value.length>0){
      value = this.state.value[0];
    }
    return (
      <TextField
        id={this.props.id}
        type={this.props.type}
        fullWidth={this.props.fullWidth}
        multiLine={this.props.multiLine}
        rows={this.props.rows}
        hintText={this.props.hintText}
        floatingLabelText={this.props.floatingLabelText}
        disabled={this.props.disabled}
        value={value}
        onChange={this.handleChange}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}
        autoComplete={autoComplete}/>
      );
    }
  }

module.exports = MaterialTextField;
