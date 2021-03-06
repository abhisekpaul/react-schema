var React = require('react');

class HiddenInput extends React.Component {

  constructor(props) {
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

  render() {
    return (
      <input type="hidden"
             name={this.props.name}
             value={this.state.value}/>
    );
  }

};

HiddenInput.defaultProps = {
  name  : undefined,
  value : undefined
};

module.exports = HiddenInput;
