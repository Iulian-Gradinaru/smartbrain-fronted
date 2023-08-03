/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    '@media (max-width: 391px)': {
      margin: 10,
    },
  };
});

/**
 * Styles the Bounding Box
 */
export const BoundingBox = styled('div')(() => {
  return {
    position: 'absolute',
    boxShadow: '0 0 0 3px #149df2 inset',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    cursor: 'pointer',
  };
});
