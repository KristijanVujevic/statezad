import "./App.css";
import React, { useState } from "react";
import ColorPicker from "./Components/colorPicker";
import FontSizePicker from "./Components/fontSizePicker";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(16);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div>
      <ColorPicker onColorChange={handleColorChange} />
      <FontSizePicker onFontSizeChange={handleFontSizeChange} />
      <div
        style={{
          backgroundColor: "black",
          color: selectedColor,
          fontSize: `${fontSize}px`,
        }}
      >
        This is the third component with dynamic background, font color, and
        font size.
      </div>
    </div>
  );
};

export default App;
