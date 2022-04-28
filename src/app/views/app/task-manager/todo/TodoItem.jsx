import React from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MdOpenWith,
  MdMoreVert,
  MdError,
  MdErrorOutline,
  MdStar,
  MdStarBorder
} from "react-icons/md";

const TodoItem = ({
  todo = { tag: [] },
  tagList,
  updateTodo,
  dragHandleProps
}) => {
  return (
    <Card className="rounded-0">
      <div className="d-flex align-items-center flex-wrap px-3 py-4">
        <Link
          as="div"
          to={`/todo/list/${todo.id}`}
          className="d-flex align-items-center flex-grow-1"
          {...dragHandleProps}
        >
          <MdOpenWith className="cursor-move" size={24}></MdOpenWith>
          <div className="ml-3">
            <p className="m-0 mb-12">{todo.title}</p>
            <p className="m-0 mb-12">{todo.note}</p>
            {todo.tag.map((tagId, index) => {
              let tagName = (tagList.find(tag => tag.id === tagId) || {}).name;
              if (!tagName) return null;
              else {
                return (
                  <div
                    key={index}
                    className="mr-12 badge badge-pill bg-gray-400 text-13 p-2"
                  >
                    {tagList.find(tag => tag.id === tagId).name}
                  </div>
                );
              }
            })}
          </div>
        </Link>

        <div className="d-flex flex-wrap align-items-center">
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => updateTodo({ ...todo, important: !todo.important })}
          >
            {todo.important ? (
              <MdError
                className="text-danger cursor-pointer"
                size={24}
              ></MdError>
            ) : (
              <MdErrorOutline
                className="cursor-pointer"
                size={24}
              ></MdErrorOutline>
            )}
          </div>
          <div
            className="p-2 btn-hover rounded-circle"
            onClick={() => updateTodo({ ...todo, starred: !todo.starred })}
          >
            {todo.starred ? (
              <MdStar
                className="text-warning cursor-pointer"
                size={24}
              ></MdStar>
            ) : (
              <MdStarBorder className="cursor-pointer" size={24}></MdStarBorder>
            )}
          </div>
          <Dropdown alignRight>
            <Dropdown.Toggle as="span" className="cursor-pointer toggle-hidden">
              <div className="p-2 btn-hover rounded-circle">
                <MdMoreVert size={24}></MdMoreVert>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="py-2 px-2">
                <label className="checkbox checkbox-primary mb-0">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={todo.done}
                    onChange={() => updateTodo({ ...todo, done: !todo.done })}
                  />
                  <span>{`Mark As ${todo.done ? "Und" : "D"}one`}</span>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="py-2 px-2">
                <label className="checkbox checkbox-primary mb-0">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={todo.read}
                    onChange={() => updateTodo({ ...todo, read: !todo.read })}
                  />
                  <span>{`Mark As ${todo.read ? "Unr" : "R"}ead`}</span>
                  <span className="checkmark"></span>
                </label>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
