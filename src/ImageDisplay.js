import React from 'react';

const ImageDisplay = ({ imageFilenames }) => {
  return (
    <div>
      {imageFilenames.map((filename, index) => (
        <img key={index} src={`http://127.0.0.1:5000${filename}`} alt={`User Requested ${index}`} />
      ))}
    </div>
  );
};

export default ImageDisplay;