import { Region } from '../MainApp/MainApp.types';

export interface FaceRecognitionProps {
  box: Region[];
  imageUrl: string;
}
