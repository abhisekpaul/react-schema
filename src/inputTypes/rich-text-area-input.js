import React from 'react';
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON, DraftJS} from "megadraft";
const {ContentState, EditorState} = DraftJS;

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
    let value = "Yo man";//this.props.value;
    let editorState;
    try{
      value =  value ? JSON.parse(value): value;
      editorState = editorStateFromRaw(value);
    } catch (ex){
      editorState = EditorState.createWithContent(ContentState.createFromText(value))
    }
    this.state = {
      editorState
    };
  }

  handleChange = (editorState) => {
    const value = editorStateToJSON(editorState);
    this.setState({
      editorState
    }, this.props.onChange.bind(null, value));
  }

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      let value = props.value;
      value =  value ? JSON.parse(value): value;
      let editorState = editorStateFromRaw(value);
      this.setState({
        editorState
      });
    }
  }

  render() {
    let editorState = this.state.editorState;
    return (
      <MegadraftEditor
        name={this.props.name}
        className={this.props.className}
        placeholder={this.props.placeholder}
        editorState={editorState}
        onChange={this.handleChange}/>
    );
  }

};

module.exports = RichTextArea;
