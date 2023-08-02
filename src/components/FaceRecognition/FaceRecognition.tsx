import React from 'react';
import './FaceRecognition.css';

import { FaceRecognitionProps } from './FaceRecognition.types';

export const FaceRecognition: React.FC<FaceRecognitionProps> = ({
  box,
  imageUrl,
}) => {
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
        {box.map((faceBox, index) => (
          <div
            key={index}
            className="bounding-box"
            style={{
              top: faceBox.region_info.bounding_box.top_row,
              right: faceBox.region_info.bounding_box.right_col,
              bottom: faceBox.region_info.bounding_box.bottom_row,
              left: faceBox.region_info.bounding_box.left_col,
            }}
          />
        ))}
      </div>
    </div>
  );
};
