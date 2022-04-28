import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import Tooltip from "rc-tooltip";
const RangeSlider = () => {
  const [value, setValue] = useState([25, 75]);

  const handleChange = value => {
    setValue(value);

  };

  return <Range value={value} onChange={handleChange} />;
};

export default RangeSlider;
