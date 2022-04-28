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

const VerticalSlider = () => {
  const [value, setValue] = useState(30);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <div style={{ height: "200px" }}>
      <Slider handle={handle} vertical value={value} onChange={handleChange} />
    </div>
  );
};

export default VerticalSlider;
