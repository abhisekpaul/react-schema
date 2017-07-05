import React from 'react';
import Cleave from 'cleave.js/react';
import moment from 'moment';

let DateTimeFormat;

class InlineDatePicker extends React.Component {

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

  render() {
    return (
      <Cleave placeholder="dd/mm/YYYY"
                value={this.state.value}
                options={{date: true,
                datePattern: ['d', 'm', 'Y']}}
                onChange={this.handleChange}
                />

    );
    // return (
    //   <DatePicker
    //     id={this.props.id}
    //     fullWidth={this.props.fullWidth}
    //     hintText={this.props.hintText}
    //     value={this.state.value}
    //     onChange={this.handleChange}
    //     onBlur={this.props.onBlur.bind(null, this.state.value)}
    //     onKeyDown={this.props.onKeyDown}
    //     formatDate={new DateTimeFormat('en-US', {
    //       day: 'numeric',
    //       month: 'long',
    //       year: 'numeric'
    //     }).format}/>
    //   );
    }

    handleChange(event){
      console.log(event.target.value);
      let date = moment(event.target.value, "DD/MM/YYYY");
      console.log(date);
      this.setState({
        value : date
      }, this.props.onChange.bind(null, date));
    }
  }

module.exports = InlineDatePicker;
