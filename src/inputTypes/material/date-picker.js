import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class MaterialDatePicker extends React.Component {

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

  handleChange = (event, date) => {
    this.setState({
      value : date
    }, this.props.onChange.bind(null, date));
  };

  render() {
    return (
      <DatePicker {...this.props}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}/>
      );
    }
  }

module.exports = MaterialDatePicker;
