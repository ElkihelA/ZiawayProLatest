import React from "react";
import { classList } from "@utils";

const RadioButton = ({
  radioGroupName,
  element,
  isSelected,
  errors,
  handleOnChange,
  handleOnClick,
  title,
}) => {
  const id = `${element.name}_${radioGroupName}`;
  return (
    <label
      className={classList({
        "btn btn-lg": true,
        "btn-secondary":
          !isSelected &&
          title !== "Souhaitez-vous être contacté par un professionnel",
        "btn-success text-white": isSelected,
        "btn-outline-danger": errors,
        "btn-success":
          element.value === "oui" &&
          title === "Souhaitez-vous être contacté par un professionnel",
        "btn-danger":
          element.value === "non" &&
          title === "Souhaitez-vous être contacté par un professionnel",
      })}
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        value={element.value}
        name={radioGroupName}
        onChange={handleOnChange}
        onClick={handleOnClick}
        style={{ display: "none" }}
      />
      <div className="text-wrap text-break">{element.alt}</div>
    </label>
  );
};

export default RadioButton;
