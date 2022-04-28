import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
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

const MultiStyledSlider = () => {
  const [value, setValue] = useState([10, 20, 60, 80]);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <Range
      count={3}
      value={value}
      pushable
      handle={handle}
      allowCross={false}
      onChange={handleChange}
      trackStyle={[{ backgroundColor: "red" }, { backgroundColor: "green" }]}
      handleStyle={[
        { backgroundColor: "yellow" },
        { backgroundColor: "white" }
      ]}
      railStyle={{ backgroundColor: "black" }}
    />
  );
};

export default MultiStyledSlider;
