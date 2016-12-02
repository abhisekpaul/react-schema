import React from 'react';
import Select from 'react-select';

class MultiSelect extends React.Component {

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
      }, this.props.onChange.bind(null, props.value));
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    }, this.props.onChange.bind(null, value));
  };

  render() {
    let options = this.props.options.map((opt, index) => {
      return {
        value:opt.value,
        label:opt.text
      };
    });
    return (
      <Select
        id={this.props.id}
        multi={this.props.multi}
        simpleValue={this.props.simpleValue}
        placeholder={this.props.placeholder}
        value={this.state.value}
        options={options}
        onChange={this.handleChange.bind(this)}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}/>
      );
    }
  }

module.exports = MultiSelect;
