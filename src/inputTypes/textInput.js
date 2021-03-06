var React = require('react');

class TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    };
  }

  handleChange = (e) => {
    this.setState({
      value : e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  render() {
    return (
      <input type="text"
             name={this.props.name}
             id={this.props.id}
             aria-labelledby={this.props.labelId}
             className={this.props.classes.input}
             placeholder={this.props.placeholder}
             value={this.state.value}
             required={this.props.required
                         ? 'required'
                         : undefined}
             onChange={this.handleChange}
             onBlur={this.props.onBlur.bind(null, this.state.value)}
             onKeyDown={this.props.onKeyDown} />
    );
  }

};

TextInput.defaultProps = {
  classes     : {},
  name        : undefined,
  id          : undefined,
  value       : undefined,
  placeholder : undefined,
  onChange    : () => {},
  onBlur      : () => {},
  onKeyDown   : () => {}
};

module.exports = TextInput;
