import React from "react";
import { classList } from "@utils";

const RadioImage = ({
  radioGroupName,
  element,
  isSelected,
  errors,
  handleOnChange,
}) => {
  return (
    <label className="form-check-label" htmlFor={element.name}>
      <div
        className={classList({
          "btn btn-secondary m-2": true,
          "btn-success": isSelected,
          "btn-outline-danger": errors,
        })}
        style={{ width: "8rem", height: "10rem" }}
      >
        <img
          className="img-thumbnail border-0"
          src={element.image}
          alt={element.alt}
        />
        <p
          className={classList({
            "text-wrap text-uppercase": true,
            "text-success": isSelected,
            "text-danger": errors,
          })}
        >
          <div className="text-wrap text-break">{element.alt}</div>
        </p>
      </div>
      <input
        className="form-check-input"
        type="radio"
        name={radioGroupName}
        id={element.name}
        value={element.value}
        checked={isSelected}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
    </label>
  );
};

export default RadioImage;
