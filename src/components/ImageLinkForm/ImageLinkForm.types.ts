import { ChangeEvent } from 'react';

export interface ImageLinkFormProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonSubmit: () => void;
}
