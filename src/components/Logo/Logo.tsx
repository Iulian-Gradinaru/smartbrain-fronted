import React from 'react';

/**
 * Imports the 'brain' image asset
 */
import brain from '../../assets/brain.png';

/**
 * Imports styles
 */
import { TiltContainer, ImgBrain } from './Logo.styles';

/**
 * Displays the component
 */
export const Logo: React.FC = () => {
  return (
    <div className="ma4 mt0">
      <TiltContainer className="Tilt br2 shadow-2">
        <div>
          <ImgBrain className="ImgBrain pa2" src={brain} alt="brain" />
        </div>
      </TiltContainer>
    </div>
  );
};
