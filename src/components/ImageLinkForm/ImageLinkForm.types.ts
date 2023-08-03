/**
 * Import ChangeEvent from the 'react' library.
 */
import { ChangeEvent } from 'react';

/**
 * Defines the component props interface
 */
export interface ImageLinkFormProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonSubmit: () => void;
}
