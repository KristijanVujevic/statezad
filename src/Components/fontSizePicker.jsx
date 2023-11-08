import React from "react";

const FontSizePicker = ({ onFontSizeChange }) => {
  const handleInputChange = (e) => {
    const fontSize = e.target.value;
    onFontSizeChange(fontSize);
  };

  return (
    <div>
      <label htmlFor="fontSizeInput">Pick a font size:</label>
      <input
        type="number"
        id="fontSizeInput"
        onChange={handleInputChange}
        min="1"
        max="100"
      />
    </div>
  );
};

export default FontSizePicker;
