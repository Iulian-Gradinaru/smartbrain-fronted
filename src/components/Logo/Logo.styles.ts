import { styled } from '@mui/system';
import Tilt from 'react-parallax-tilt';

export const TiltContainer = styled(Tilt)(() => {
  return {
    background: 'rgb(234, 238, 221)',
    height: 150,
    width: 150,
    marginTop: -90,
  };
});

export const ImgBrain = styled('img')(() => {
  return {
    height: '130px',
    width: '130px',
    padding: '10px',
  };
});
