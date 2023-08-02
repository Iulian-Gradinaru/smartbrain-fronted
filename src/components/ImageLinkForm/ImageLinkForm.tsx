import React, { KeyboardEvent } from 'react';
import './ImageLinkForm.css';

import { ImageLinkFormProps } from './ImageLinkForm.types';

export const ImageLinkForm: React.FC<ImageLinkFormProps> = ({
  onInputChange,
  onButtonSubmit,
}) => {
  const magicBrainMessage =
    'This Magic Brain will detect faces in your pictures. Give it a try!';

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onButtonSubmit();
    }
  };

  return (
    <div>
      <p className="f3 white">{magicBrainMessage}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib black bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
