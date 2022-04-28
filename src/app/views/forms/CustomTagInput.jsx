import React, { Component } from "react";
import { TagInput } from "reactjs-tag-input";
import { Button } from "react-bootstrap";

class CustomTagInput extends Component {
  state = {
    tags: ["sdjfdfkdsjflksj"]
  };

  onTagsChanged(tags) {
    alert(this.state);
    // this.setState({ tags });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onTagsChanged}>show state</Button>
        <TagInput tags={this.state.tags} onTagsChanged={this.onTagsChanged} />
      </div>
    );
  }
}

export default CustomTagInput;
