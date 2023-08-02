import React from 'react';

import brain from '../../assets/brain.png';
import { TiltContainer, ImgBrain } from './Logo.styles';

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
