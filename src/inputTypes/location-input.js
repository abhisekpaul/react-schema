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
    let google = window.google;
    if(!google) return null;

    let location = google && new google.maps.LatLng(53.558572, 9.9278215);
    return (
      <Geosuggest
        placeholder={this.props.placeholder}
        inputClassName={this.props.classes.input}
        initialValue={this.props.initialValue}
        onSuggestSelect={this.handleChange.bind(this)}
        location={location}
        radius={this.props.radius}
        country={this.props.country}
        autoActivateFirstSuggest={this.props.autoActivateFirstSuggest}
        value={this.state.value}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown}/>
      );
    }
  }

module.exports = LocationInput;
