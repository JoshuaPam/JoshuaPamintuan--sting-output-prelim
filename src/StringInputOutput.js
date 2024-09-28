
import React, { useState } from 'react';

function StringInputOutput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>String Input and Output</h1>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter text" />
      <p>Output: {inputValue}</p>
    </div>
  );
}

export default StringInputOutput;
