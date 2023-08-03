import React, { KeyboardEvent } from 'react';

/**
 * Imports styles
 */
import {
  FormContainer,
  Input,
  DetectButton,
  Parafraph,
} from './ImageLinkForm.styles';

/**
 * Imports types
 */
import { ImageLinkFormProps } from './ImageLinkForm.types';

/**
 * Displays the component
 */
export const ImageLinkForm: React.FC<ImageLinkFormProps> = (props) => {
  const { onInputChange, onButtonSubmit } = props;

  /**
   * Handles triggers onButtonSubmit when the 'Enter' key is pressed.
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onButtonSubmit();
    }
  };

  return (
    <div>
      <Parafraph className="f3 ">
        This Magic Brain will detect faces in your pictures. Give it a try!
      </Parafraph>
      <div className="center">
        <FormContainer className="center pa4 br3 shadow-5">
          <Input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
          />
          <DetectButton
            className="w-30 grow f4 link ph3 pv2 dib black bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </DetectButton>
        </FormContainer>
      </div>
    </div>
  );
};
