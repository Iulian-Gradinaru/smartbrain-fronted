import { styled } from '@mui/system';

// Styled Container
export const Container = styled('div')(() => {
  return {
    textAlign: 'center',
    color: 'red',
  };
});

// Styled Center
export const Center = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});

// Styled Particles
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
