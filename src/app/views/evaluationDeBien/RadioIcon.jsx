import React from "react";
import { classList } from "@utils";

const RadioIcon = ({
  radioGroupName,
  element,
  isSelected,
  errors,
  handleOnRadioIconChange,
}) => {
  return (
    <label className="form-check-label" htmlFor={element.name}>
      <button
        className={classList({
          "btn btn-secondary m-2": true,
          "btn-success": isSelected,
          "btn-outline-danger": errors,
        })}
        onClick={handleOnRadioIconChange}
        type="button"
        style={{ width: "6rem", height: "6rem" }}
      >
        <i
          className={
            `text-30 ${element.icon} ` +
            classList({
              "text-success": isSelected,
              "text-danger": errors,
            })
          }
        />
        <h6
          className={classList({
            "text-wrap text-uppercase pt-2": true,
            "text-success": isSelected,
            "text-danger": errors,
          })}
          style={{ fontSize: "9px" }}
        >
          <div className="text-wrap text-break">{element.alt}</div>
        </h6>
      </button>
      {/* <input
        className="form-check-input"
        type="radio"
        name={radioGroupName}
        id={element.name}
        value={element.value}
        checked={isSelected}
        onChange={handleOnRadioIconChange}
        style={{ display: "none" }}
      /> */}
    </label>
  );
};

export default RadioIcon;
