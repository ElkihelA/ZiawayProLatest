import React from "react";
import { classList } from "@utils";

const VMZFormNavPills = (props) => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    dots.push(
      <li
        key={i}
        className={classList({
          "nav-item": true,
          "cursor-pointer": !isActive,
        })}
        onClick={() => props.goToStep(i)}
      >
        <h6
          className={classList({
            "nav-link": true,
            active: isActive,
          })}
        >
          {props.titles[i - 1]}
        </h6>
      </li>
    );
  }
  return <ul className="nav nav-pills card-header-pills">{dots}</ul>;
};

export default VMZFormNavPills;
