/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    textAlign: 'center',
  };
});

/**
 * Styles the Center
 */
export const Center = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});

/**
 * Styles the Particles Container
 */
export const ParticlesContainer = styled('div')(() => {
  return {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  };
});
