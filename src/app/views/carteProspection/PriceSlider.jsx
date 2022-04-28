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

const PriceSlider = (props) => {
  const [value, setValue] = useState([10000, 20000000]);

  const handleChange = value => {
    setValue(value);
  };

  return <Range value={value} handle={handle} onChange={handleChange} />;
};

export default PriceSlider;
