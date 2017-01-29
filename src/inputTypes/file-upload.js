import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

class FileUpload extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    value       : undefined,
    onChange    : () => {},
    componentConfig: {},
    djsConfig: {}
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

  render() {
    const config = this.props.componentConfig;
    const djsConfig = this.props.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      addedfile: this.handleFileAdded,
      removedfile: this.removedfile
    }

    return (
      <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
    );
  }

  handleFileAdded = (file) => {
    const newValue = {
      file:file,
      type:'ADD'
    };

    this.setState({
      value: newValue
    }, this.props.onChange.bind(null, newValue));
  }

  removedfile = (file) => {
    const newValue = {
      file:file,
      type:'REMOVE'
    };

    this.setState({
      value: newValue
    }, this.props.onChange.bind(null, newValue));
  }
}

module.exports = FileUpload;
