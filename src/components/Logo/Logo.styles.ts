/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports the Tilt component from 'react-parallax-tilt' library
 */
import Tilt from 'react-parallax-tilt';

/**
 * Styles the Tilt Container
 */
export const TiltContainer = styled(Tilt)(() => {
  return {
    background: 'rgb(234, 238, 221)',
    height: 150,
    width: 150,
    marginTop: -90,
  };
});

/**
 * Styles the Img Brain
 */
export const ImgBrain = styled('img')(() => {
  return {
    height: '130px',
    width: '130px',
    padding: '10px',
  };
});
