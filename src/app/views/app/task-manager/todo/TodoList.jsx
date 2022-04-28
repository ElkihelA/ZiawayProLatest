import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  getAllTodo,
  updateTodoById,
  reorderTodoList,
  getAllTodoTag
} from "./todoService";
import { Button, Card, Dropdown } from "react-bootstrap";
import { MdArrowDropDown, MdLabel } from "react-icons/md";

class TodoList extends Component {
  todoList = [];
  state = {
    tagList: [],
    todoList: []
  };

  componentDidMount() {
    this.props.setSearchFunction(this.search);
    getAllTodo().then(({ data }) => {
      getAllTodoTag().then(({ data: tagList }) => {
        this.setState({
          tagList,
          todoList: [...data]
        });
        this.todoList = [...data];
      });
    });
  }

  search = query => {
    query = query.toLowerCase();
    let filteredTodoList = this.todoList.filter(
      todo =>
        todo.title.toLowerCase().match(query) ||
        todo.note.toLowerCase().match(query)
    );
    this.setState({
      todoList: [...filteredTodoList]
    });
  };

  updateTodo = todo => {
    updateTodoById(todo).then(({ data }) => {
      this.setState({
        todoList: [...data]
      });
      this.todoList = [...data];
    });
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  handleDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let todoList = this.reorder(
      this.state.todoList,
      result.source.index,
      result.destination.index
    );

    reorderTodoList(todoList).then(({ data }) => {
      this.setState({
        todoList: [...data]
      });
      this.todoList = [...data];
    });
  };

  filterTodoListByProperty = (queryField, queryValue) => {
    if (queryField !== "all") {
      this.setState({
        todoList: [
          ...this.todoList.filter(todo => todo[queryField] === queryValue)
        ]
      });
    } else {
      this.setState({
        todoList: [...this.todoList]
      });
    }
  };

  filterTodoListByTag = tagId => {
    if (tagId !== "all")
      this.setState({
        todoList: [...this.todoList.filter(todo => todo.tag.includes(tagId))]
      });
    else {
      this.setState({
        todoList: [...this.todoList]
      });
    }
  };

  render() {
    let { todoList, tagList } = this.state;

    return (
      <Card className="todo position-relative">
        <div className="todo-list__topbar card-header py-2 d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex ml-3">
            <Dropdown>
              <Dropdown.Toggle
                as="span"
                className="toggle-hidden cursor-pointer"
              >
                <div className="p-2 btn-hover rounded-circle">
                  <MdArrowDropDown size={24}></MdArrowDropDown>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("all")}
                >
                  All
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("read", true)}
                >
                  Read
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("read", false)}
                >
                  Unread
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("done", true)}
                >
                  Done
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("done", false)}
                >
                  Undone
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    this.filterTodoListByProperty("important", true)
                  }
                >
                  Important
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    this.filterTodoListByProperty("important", false)
                  }
                >
                  Unimportant
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.filterTodoListByProperty("starred", true)}
                >
                  Starred
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    this.filterTodoListByProperty("starred", false)
                  }
                >
                  Unstarred
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                as="span"
                className="toggle-hidden cursor-pointer"
              >
                <div className="p-2 btn-hover rounded-circle">
                  <MdLabel size={24}></MdLabel>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className="text-capitalize"
                  onClick={() => this.filterTodoListByTag("all")}
                >
                  all
                </Dropdown.Item>
                {tagList.map(tag => (
                  <Dropdown.Item
                    key={tag.id}
                    className="text-capitalize"
                    onClick={() => this.filterTodoListByTag(tag.id)}
                  >
                    {tag.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="pr-3">
            <Button
              variant="primary"
              onClick={() => this.props.history.push("/todo/list/add")}
            >
              Create Todo
            </Button>
          </div>
        </div>

        <div className="todo-list">
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todoList.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={provided.draggableProps.style}
                        >
                          <TodoItem
                            tagList={tagList}
                            updateTodo={this.updateTodo}
                            key={index}
                            todo={todo}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </Card>
    );
  }
}

export default TodoList;
