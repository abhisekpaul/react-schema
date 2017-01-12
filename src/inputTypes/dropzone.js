import React from 'react';
import Dropzone from 'dropzone';

class DropzoneFileUpload extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    value       : undefined,
    onChange    : () => {},
    dropMessage: 'Try dropping some files here, or click to select files to upload.',
    disableClick: false,
    multiple: false
  };

  constructor(props){
    super(props);
    this.state = {
      value : this.props.value
    };
  }

  componentDidMount() {
    // new Dropzone("div#dropzone", { url: "/file/post"});
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setState({
        value: props.value,
      }, this.props.onChange.bind(null, props.value));
    }
  }

  render() {
    return (
      <div></div>
      );
    }
  }

  module.exports = DropzoneFileUpload;
