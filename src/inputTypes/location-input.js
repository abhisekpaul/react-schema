import React from 'react';
import Geosuggest from 'react-geosuggest';

class LocationInput extends React.Component {

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

  handleChange = (value) => {
    this.setState({
      value: value,
    }, this.props.onChange.bind(null, value));
  };

  render() {
    return (
      <Geosuggest
        inputClassName={this.props.classes.input}
        initialValue={this.props.initialValue}
        onSuggestSelect={this.handleChange.bind(this)}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius={this.props.radius}
        country={this.props.country}
        autoActivateFirstSuggest={this.props.autoActivateFirstSuggest}
        {...this.props}
        value={this.state.value}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}/>
      );
    }
  }

module.exports = LocationInput;
