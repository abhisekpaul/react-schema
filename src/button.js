var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component {

  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <RaisedButton className={this.props.className}
        label={this.props.text} primary={true}
        onTouchTap={this.handleClick.bind(this)}/>
    );
  }

};

Button.defaultProps = {
  text      : 'Submit',
  className : undefined,
  onClick   : () => {}
};

module.exports = Button;
