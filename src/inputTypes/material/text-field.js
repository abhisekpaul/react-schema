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

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    }, this.props.onChange.bind(null, event.target.value));
  };

  render() {
    return (
      <TextField {...this.props}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}/>
      );
    }
  }

module.exports = MaterialTextField;
