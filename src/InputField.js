import React from 'react';

const InputField = ({ inputText, setInputText, handleFetchImages }) => {
  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Enter your text"
      />
      <button onClick={handleFetchImages}>Get Images</button>
    </div>
  );
};

export default InputField;