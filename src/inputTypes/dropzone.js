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
    new Dropzone("div#dropzone", { url: "/file/post"});
  }

  render() {
    return (
      <div id="dropzone">
      </div>
      );
    }
  }

  module.exports = DropzoneFileUpload;
