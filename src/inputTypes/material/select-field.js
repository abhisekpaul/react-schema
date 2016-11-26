import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MaterialSelectField extends React.Component {

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

  handleChange = (event, index, value) => {
    this.setState({
      value: value,
    }, this.props.onChange.bind(null, value));
  };

  render() {
    let options = this.props.options.map((opt, index) =>
      <MenuItem key={index}
              value={opt.value} primaryText={opt.text}/>
    );

    return (
      <SelectField
      id={this.props.id}
      fullWidth={this.props.fullWidth}
      hintText={this.props.hintText}
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      onBlur={this.props.onBlur.bind(null, this.state.value)}
      onKeyDown={this.props.onKeyDown}
      >
          {options}
      </SelectField>
    )
  }
}

module.exports = MaterialSelectField;
