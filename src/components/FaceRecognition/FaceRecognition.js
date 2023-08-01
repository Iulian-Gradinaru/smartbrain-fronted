import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({ box, imageUrl }) => {
  // Handle the framing bands for detected faces
  const renderFaceBoxes = () => {
    return box.map((faceBox, index) => (
      <div
        key={index}
        className="bounding-box"
        style={{
          top: faceBox.topRow,
          right: faceBox.rightCol,
          bottom: faceBox.bottomRow,
          left: faceBox.leftCol,
        }}
      ></div>
    ));
  };

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
        {renderFaceBoxes()}
      </div>
    </div>
  );
};
