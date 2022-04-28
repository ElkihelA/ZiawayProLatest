import React, { useState } from "react";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const marks = {
  "-10": "-10°C",
  0: <strong>0°C</strong>,
  26: "26°C",
  37: "37°C",
  50: "50°C",
  100: {
    style: {
      color: "red"
    },
    label: <strong>100°C</strong>
  }
};

const MarkSlider = () => {
  const [value, setValue] = useState(30);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div className="px-3 pb-3">
      <Slider
        step={25}
        min={-10}
        dots={true}
        included={true}
        marks={marks}
        value={value}
        handle={handle}
        onChange={handleChange}
      />
    </div>
  );
};

export default MarkSlider;
