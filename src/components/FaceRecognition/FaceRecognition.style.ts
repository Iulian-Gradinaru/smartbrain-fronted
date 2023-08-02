/* .bounding-box {
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
  } */

import { styled } from '@mui/system';

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

export const Container = styled('div')(() => {
  return {
    '@media (max-width: 391px)': {
      margin: 10,
    },
  };
});

// export const Img = styled('img')(() => {
//   return {
//     // width: 500,
//     // height: 'auto',
//     width: 366,
//     height: 326,
//   };
// });
