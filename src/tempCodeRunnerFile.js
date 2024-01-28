// src/App.js
import React, { useState } from 'react';
import './App.css';
import AnimationComponent from './AnimationComponent';
import { fetchImages } from './ImageFetcher'; // Make sure this file exists and is correct

const App = () => {
  const [inputText, setInputText] = useState('');
  const [imageFilenames, setImageFilenames] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleFetchImages = () => {
    fetchImages(inputText, setImageFilenames);
  };

  const handlePageClick = () => {
    setShowInput(true); // Show the input when the page is clicked
  };

  return (
    <div className="App" onClick={handlePageClick}>
      <div className="App-logo">Emotify</div>
      <p>Bring back the feeling.</p>

      {showInput && (
        <>
          <input 
            type="text" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            placeholder="Enter your text"
          />
          <button onClick={handleFetchImages}>Get Images</button>
        </>
      )}

      <div>
        {imageFilenames.map((filename, index) => (
          <img key={index} src={`http://127.0.0.1:5000${filename}`} alt="User Requested" />
        ))}
      </div>
      <AnimationComponent />
    </div>
  );
};

export default App;