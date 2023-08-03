/**
 * Imports types
 */
import { Region } from '../MainApp/MainApp.types';

/**
 * Defines the component props interface
 */
export interface FaceRecognitionProps {
  box: Region[];
  imageUrl: string;
}
