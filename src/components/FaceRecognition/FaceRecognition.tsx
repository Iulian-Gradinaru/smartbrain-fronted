import React from 'react';

/**
 * Imports styles
 */
import { BoundingBox, Container } from './FaceRecognition.style';

/**
 * Imports types
 */
import { FaceRecognitionProps } from './FaceRecognition.types';

/**
 * Displays the component
 */
export const FaceRecognition: React.FC<FaceRecognitionProps> = (props) => {
  const { box, imageUrl } = props;
  return (
    <div className="center ma">
      <Container className=" absolute mt2 ">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {box.map((faceBox, index) => (
          <BoundingBox
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
      </Container>
    </div>
  );
};
