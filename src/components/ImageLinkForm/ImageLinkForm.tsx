import React, { KeyboardEvent } from 'react';

import { ImageLinkFormProps } from './ImageLinkForm.types';
import {
  FormContainer,
  Input,
  DetectButton,
  Parafraph,
} from './ImageLinkForm.styles';

// export const ImageLinkForm: React.FC<ImageLinkFormProps> = (props) => {
//   const { onInputChange, onButtonSubmit } = props;
//   // const magicBrainMessage =
//   //   'This Magic Brain will detect faces in your pictures. Give it a try!';

//   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       onButtonSubmit();
//     }
//   };

//   return (
//     <div>
//       <p className="f3 white">
//         This Magic Brain will detect faces in your pictures. Give it a try!
//       </p>
//       <div className="center">
//         <div className="form center pa4 br3 shadow-5">
//           <input
//             className="f4 pa2 w-70 center"
//             type="text"
//             onChange={onInputChange}
//             onKeyDown={handleKeyDown}
//           />
//           <button
//             className="w-30 grow f4 link ph3 pv2 dib black bg-light-purple"
//             onClick={onButtonSubmit}
//           >
//             Detect
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export const ImageLinkForm: React.FC<ImageLinkFormProps> = (props) => {
  const { onInputChange, onButtonSubmit } = props;

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
