import React from 'react';
import Cleave from 'cleave.js/react';
import moment from 'moment';
import {isDate} from 'lodash';

let DateTimeFormat;

class InlineDatePicker extends React.Component {

    static propTypes = {};

    static defaultProps = {
        classes: {},
        name: undefined,
        id: undefined,
        value: undefined,
        placeholder: undefined,
        onChange: () => {},
        onBlur: () => {},
        onKeyDown: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    componentWillReceiveProps(props) {
        if (this.props.value !== props.value) {
            this.setState({value: props.value});
        }
    }

    render() {
        return (
          <Cleave placeholder="dd/mm/YYYY" value={this.state.value}
            options={{
              date: true,
              datePattern: ['d', 'm', 'Y']
            }}
            onChange={this.handleChange}/>
      );
    }

    handleChange = (event) => {
      let date = moment(event.target.value, "DD/MM/YYYY");
      // this.setState({
      //     value: date
      // }, this.props.onChange.bind(null, date));
    }
}

module.exports = InlineDatePicker;
