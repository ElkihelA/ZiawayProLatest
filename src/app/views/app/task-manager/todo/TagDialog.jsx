import React, { Component } from "react";
import { Modal, FormControl, Button } from "react-bootstrap";
import { getAllTodoTag, addNewTag, deleteTag } from "./todoService";
import { generateRandomId } from "@utils";

class TagDialog extends Component {
  state = {
    name: "",
    tagList: []
  };

componentDidMount() {
  getAllTodoTag().then(({ data }) => {
    this.setState({
      tagList: [...data]
    });
  });
}

  handleChange = event => {
    if (event.key === "Enter") {
      this.handleAddNewTag();
    } else {
      this.setState({
        name: event.target.value
      });
    }
  };

  handleAddNewTag = event => {
    let { name } = this.state;

    if (name.trim() !== "")
      addNewTag({
        id: generateRandomId(),
        name: name.trim()
      }).then(({ data }) => {
        this.setState({ tagList: data, name: "" });
        this.props.reloadTagList();
      });
  };

  handleDeleteTag = id => {
    deleteTag({ id, name: this.state.name }).then(({ data }) => {
      this.setState({ tagList: data });
      this.props.reloadTagList();
    });
  };

  render() {
    let { open, handleClose } = this.props;
    let { tagList, name } = this.state;

    return (
      <Modal onHide={handleClose} show={open} size="sm">
        <div className="px-3 py-4">
          <div className="d-flex align-items-center">
            <FormControl
              onChange={this.handleChange}
              onKeyDown={this.handleChange}
              value={name}
              className="flex-grow-1"
              placeholder="New tag*"
            />
            <div>
              <Button
                onClick={this.handleAddNewTag}
                className=""
                variant="primary"
              >
                Add
              </Button>
            </div>
          </div>
          <div className="pt-3">
            {tagList.map((tag, index) => (
              <div
                className="d-flex align-items-center justify-content-between my-2"
                key={tag.id}
              >
                <span>{index + 1}</span>
                <span className="text-capitalize">{tag.name}</span>
                <Button
                  onClickCapture={() => this.handleDeleteTag(tag.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
          <div className="pt-3 text-right">
            <Button onClick={handleClose} variant="outline-danger">
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TagDialog;
