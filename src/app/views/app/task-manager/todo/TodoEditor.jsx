import React, { Component } from "react";
import {
  Card,
  Button,
  Dropdown,
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getTodoById,
  getAllTodoTag,
  updateTodoById,
  deleteTodo,
  addTodo
} from "./todoService";
import DatePicker from "react-datepicker";
import { Formik } from "formik";
import * as yup from "yup";
import {
  MdArrowBack,
  MdDrafts,
  MdMarkunread,
  MdError,
  MdErrorOutline,
  MdStar,
  MdStarBorder,
  MdLibraryAdd,
  MdLabel,
  MdDelete,
  MdClose
} from "react-icons/md";
import { GullTooltip } from "@gull";
import TagDialog from "./TagDialog";

class TodoEditor extends Component {
  state = {
    todo: {
      title: "",
      note: "",
      done: false,
      read: false,
      starred: false,
      important: false,
      startDate: new Date(),
      dueDate: new Date(),
      tag: []
    },
    tagList: [],
    shouldOpenTagDialog: false
  };

  componentDidMount() {
    let { id: todoId } = this.props.match.params;

    getAllTodoTag().then(({ data: tagList }) => {
      if (todoId !== "add") {
        getTodoById(todoId).then(({ data }) => {
          if (!data) {
            this.props.history.push("/todo/list");
            return;
          }
          this.setState({
            todo: { ...data },
            tagList: [...tagList]
          });
        });
      } else {
        this.setState({
          tagList
        });
      }
    });
  }

  addNewTodo = values => {
    addTodo({ ...values }).then(() => {
      this.props.history.push("/todo/list");
    });
  };

  updateTodo = todo => {
    updateTodoById(todo);
    this.setState({
      todo: {
        ...this.state.todo,
        ...todo
      }
    });
  };

  reloadTagList = () => {
    getAllTodoTag().then(({ data }) => {
      this.setState({
        tagList: [...data]
      });
    });
  };

  addTagInTodo = id => {
    let { tag } = this.state.todo;
    if (!tag.includes(id)) {
      tag.push(id);
      this.setState({
        todo: {
          ...this.state.todo,
          tag
        }
      });
    }
  };

  handleTagDelete = tagId => {
    let { tag: tagList = [] } = this.state.todo;
    tagList = tagList.filter(id => id !== tagId);
    this.setState(
      {
        todo: {
          ...this.state.todo,
          tag: [...tagList]
        }
      },
      () => updateTodoById({ ...this.state.todo })
    );
  };

  handleTodoDelete = () => {
    deleteTodo({ ...this.state.todo }).then(() => {
      this.props.history.push("/todo/list");
    });
  };

  handleSubmit = values => {
    let { id: todoId } = this.props.match.params;
    if (todoId === "add") {
      this.addNewTodo(values);
    } else {
      updateTodoById({ ...this.state.todo, ...values }).then(() => {
        this.props.history.push("/todo/list");
      });
    }
  };

  handleTagDialogToggle = () => {
    this.setState({
      shouldOpenTagDialog: !this.state.shouldOpenTagDialog
    });
  };

  render() {
    let {
      done,
      read,
      starred,
      important,
      tag: tagIdList = []
    } = this.state.todo;
    let { tagList } = this.state;

    return (
      <Card className="todo-editor position-relative m-sm-30">
        <div className="editor__topbar bg-light-gray p-2 d-flex flex-wrap card-header justify-content-between align-items-center">
          <div className="d-flex flex-wrap align-items-center">
            <Link to="/todo/list">
              <div className="p-2 rounded-circle btn-hover">
                <MdArrowBack size={24}></MdArrowBack>
              </div>
            </Link>
            <div className="ml-4">
              <label className="checkbox checkbox-primary mb-0">
                <input
                  type="checkbox"
                  name="agree"
                  checked={done}
                  onChange={() =>
                    this.updateTodo({ ...this.state, done: !done })
                  }
                />
                <span>{`Mark As ${done ? "Und" : "D"}one`}</span>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <GullTooltip
              title={`Mark As ${read ? "Unr" : "R"}ead`}
              fontSize="large"
            >
              <div
                className="p-2 rounded-circle btn-hover cursor-pointer mr-2"
                onClick={() => this.updateTodo({ ...this.state, read: !read })}
              >
                {read ? (
                  <MdDrafts size={24}></MdDrafts>
                ) : (
                  <MdMarkunread size={24}></MdMarkunread>
                )}
              </div>
            </GullTooltip>

            <GullTooltip
              title={`Mark As ${important ? "Uni" : "I"}mportant`}
              fontSize="large"
            >
              <div
                className="p-2 rounded-circle btn-hover  cursor-pointer mr-2"
                onClick={() =>
                  this.updateTodo({ ...this.state, important: !important })
                }
              >
                {important ? (
                  <MdError className="text-danger" size={24}></MdError>
                ) : (
                  <MdErrorOutline size={24}></MdErrorOutline>
                )}
              </div>
            </GullTooltip>

            <GullTooltip
              title={`Mark As ${starred ? "Uns" : "S"}tarred`}
              fontSize="large"
            >
              <div
                className="p-2 rounded-circle btn-hover  cursor-pointer mr-2"
                onClick={() =>
                  this.updateTodo({ ...this.state, starred: !starred })
                }
              >
                {starred ? (
                  <MdStar className="text-warning" size={24}></MdStar>
                ) : (
                  <MdStarBorder size={24}></MdStarBorder>
                )}
              </div>
            </GullTooltip>

            <GullTooltip title="Manage tags" fontSize="large">
              <div
                className="p-2 rounded-circle btn-hover  cursor-pointer mr-2"
                onClick={this.handleTagDialogToggle}
              >
                <MdLibraryAdd size={24}></MdLibraryAdd>
              </div>
            </GullTooltip>

            <Dropdown>
              <Dropdown.Toggle
                as="span"
                className="cursor-pointer toggle-hidden"
              >
                <GullTooltip title="Add tags" fontSize="large">
                  <div className="p-2 rounded-circle btn-hover">
                    <MdLabel size={24}></MdLabel>
                  </div>
                </GullTooltip>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.tagList.map(tag => (
                  <Dropdown.Item
                    className="text-capitalize"
                    key={tag.id}
                    onClick={() => this.addTagInTodo(tag.id)}
                  >
                    {tag.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <GullTooltip title="Delete" fontSize="large">
              <div
                className="p-2 rounded-circle btn-hover  cursor-pointer mr-2"
                onClick={this.handleTodoDelete}
              >
                <MdDelete size={24}></MdDelete>
              </div>
            </GullTooltip>
          </div>
        </div>

        <div className="editor__form p-3">
          <div className="my-3">
            {tagIdList.map(tagId => {
              let tagName = (tagList.find(tag => tag.id === tagId) || {}).name;
              if (!tagName) return null;
              else
                return (
                  <div
                    className="badge badge-pill bg-gray-400 text-capitalize mr-2 pl-2"
                    key={tagId}
                  >
                    <div className=" d-flex align-items-center">
                      <span className="text-12">{tagName}</span>
                      <span
                        className="p-1 rounded-circle btn-hover"
                        onClick={() => this.handleTagDelete(tagId)}
                      >
                        <MdClose size="18"></MdClose>
                      </span>
                    </div>
                  </div>
                );
            })}
          </div>

          <Formik
            initialValues={this.state.todo}
            validationSchema={todoSchema}
            enableReinitialize={true}
            onSubmit={this.handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel>Title</FormLabel>
                  <FormControl
                    className="mb-3 w-100"
                    label="Title*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="title"
                    value={values.title}
                    isInvalid={errors.title && touched.title}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Put your notes</FormLabel>
                  <FormControl
                    as="textarea"
                    className="mb-3 w-100"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="note"
                    value={values.note}
                    isInvalid={errors.note && touched.note}
                  />
                </FormGroup>

                <div className="row mb-3">
                  <FormGroup className="col-4">
                    <FormLabel className="mr-2">Start date</FormLabel>
                    <DatePicker
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Start date"
                      selected={new Date(values.startDate)}
                      onChange={date => {
                        setFieldValue("startDate", date);
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="col-4">
                    <FormLabel className="mr-2">Due date</FormLabel>
                    <DatePicker
                      className="form-control"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Start date"
                      selected={new Date(values.dueDate)}
                      onChange={date => {
                        setFieldValue("dueDate", date);
                      }}
                    />
                  </FormGroup>
                </div>
                <Link to="/todo/list">
                  <Button
                    className="mr-3"
                    variant="outline-danger"
                    type="button"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </form>
            )}
          </Formik>
        </div>
        <TagDialog
          reloadTagList={this.reloadTagList}
          open={this.state.shouldOpenTagDialog}
          handleClose={this.handleTagDialogToggle}
        />
      </Card>
    );
  }
}

const todoSchema = yup.object().shape({
  title: yup.string().required("title is required"),
  note: yup.string().required("note is required")
});

export default TodoEditor;
