/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
    marginTop: '-150px',
    '@media (max-width: 768px)': {
      marginTop: 30,
    },
    '@media (max-width: 391px)': {
      marginTop: -25,
    },
  };
});

/**
 * Styles the Current
 */
export const Current = styled('div')(() => {
  return {
    color: 'black',
    fontWeight: 600,
    marginBottom: 20,
  };
});

/**
 * Styles the Entries
 */
export const Entries = styled('div')(() => {
  return {
    color: 'black',
    fontWeight: 600,
    marginBottom: -20,
    '@media (max-width: 768px)': {
      marginTop: 30,
    },
    '@media (max-width: 391px)': {
      marginTop: -10,
      marginBottom: -20,
    },
  };
});
