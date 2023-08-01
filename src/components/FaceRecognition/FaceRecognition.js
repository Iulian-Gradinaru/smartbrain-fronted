import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({ box, imageUrl }) => {
  // Setăm un array gol în cazul în care box nu este definit sau nu este un array
  const faceBoxes = Array.isArray(box) ? box : [];

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {faceBoxes.map((faceBox, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: faceBox.topRow,
              right: faceBox.rightCol,
              bottom: faceBox.bottomRow,
              left: faceBox.leftCol,
            }}
          />
        ))}
      </div>
    </div>
  );
};
