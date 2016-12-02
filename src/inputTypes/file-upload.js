import React from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends React.Component {

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

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setState({
        value: props.value,
      }, this.props.onChange.bind(null, props.value));
    }
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} id={this.props.id} disableClick={this.props.disableClick}
          multiple={this.props.multiple}>
          <div>{this.props.dropMessage}</div>
        </Dropzone>
        { this.state.value ? (
            <div>
              <h2>Uploading {this.state.value.length} files...</h2>
              <div>
              {
                this.state.value.map(file => {
                  return <img src={file.preview} />
                })
              }
              </div>
            </div>
          ) : null
        }
        </div>
      );
    }

    onDrop = (files) => {
      this.setState({
        value: files
      }, this.props.onChange.bind(null, files));
    }
  }

  module.exports = FileUpload;
