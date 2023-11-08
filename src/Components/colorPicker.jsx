import React from "react";

const ColorPicker = ({ onColorChange }) => {
  const handleInputChange = (e) => {
    const color = e.target.value;
    onColorChange(color);
  };

  return (
    <div>
      <label htmlFor="colorInput">Pick a color:</label>
      <input type="color" id="colorInput" onChange={handleInputChange} />
    </div>
  );
};

export default ColorPicker;
