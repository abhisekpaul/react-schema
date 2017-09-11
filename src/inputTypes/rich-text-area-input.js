import React from 'react';
import ReactQuill from 'react-quill';

class RichTextArea extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
    classes     : {},
    name        : undefined,
    id          : undefined,
    value       : undefined,
    placeholder : undefined,
    onChange    : () => {},
    onBlur      : () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      value:this.props.value
    };
  }

  handleChange = (value) => {
    this.setState({
      value
    }, this.props.onChange.bind(null, value));
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      let value = props.value;
      this.setState({
        value
      });
    }
  }

  render() {
    const DEFAULT_MODULES = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}]
      ]
    }

    const DEFAULT_FORMATS = [
      'header',
      'bold', 'italic', 'underline', 'blockquote',
      'list', 'bullet'
    ];

    const modules = this.props.modules || DEFAULT_MODULES;
    const formats = this.props.formats || DEFAULT_FORMATS;

    let value = this.state.value;
    return (
      <ReactQuill value={value}
        aria-labelledby={this.props.labelId}
        required={this.props.required
                    ? 'required'
                    : undefined}
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        modules={modules}
        formats={formats}
        onChange={this.handleChange}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        onKeyDown={this.props.onKeyDown} />
    );
  }
};

module.exports = RichTextArea;
