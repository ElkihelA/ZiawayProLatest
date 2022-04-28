import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";

class TagInput extends Component {
  state = {
    tags: [
      { id: "USA", text: "USA" },
      { id: "Germany", text: "Germany" },
      { id: "Austria", text: "Austria" },
      { id: "Costa Rica", text: "Costa Rica" },
      { id: "Sri Lanka", text: "Sri Lanka" },
      { id: "Thailand", text: "Thailand" }
    ],
    suggestions: [
      { id: "USA", text: "USA" },
      { id: "Germany", text: "Germany" },
      { id: "Austria", text: "Austria" },
      { id: "Costa Rica", text: "Costa Rica" },
      { id: "Sri Lanka", text: "Sri Lanka" },
      { id: "Thailand", text: "Thailand" }
    ]
  };

  handleDelete = i => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  };

  handleAddition = tag => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  };

  handleDrag = (tag, currPos, newPos) => {
    if (!newPos) return;

    let tags = [...this.state.tags];

    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    this.setState({ tags });
  };

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          allowDragDrop={false}
          delimiters={[188, 13]}
        />
      </div>
    );
  }
}

export default TagInput;
