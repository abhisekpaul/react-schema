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
    this.setState({
      value: event.target.value,
    }, this.props.onChange.bind(null, event.target.value));
  };

  render() {
    const autoComplete = this.props.autoComplete ? this.props.autoComplete : 'off';
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
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}
        autoComplete={autoComplete}/>
      );
    }
  }

module.exports = MaterialTextField;
