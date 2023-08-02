/* .form {
    width: 700px;
    background: #36c;
    background:
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,
radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,
linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);
background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;
background-color: #840b2a;
} */

import { styled } from '@mui/system';

export const FormContainer = styled('div')(() => {
  return {
    width: 700,
    marginBottom: 20,
    background: `
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,
      linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)
    `,
    backgroundSize:
      '470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%',
    backgroundColor: '#840b2a',
    '@media (max-width: 768px)': {
      marginTop: 10,
    },
    '@media (max-width: 391px)': {
      margin: 12,
    },
  };
});

export const Input = styled('input')(() => {
  return {
    fontSize: '1.5rem',
    padding: '10px',
    width: '70%',
    display: 'block',
    margin: '0 auto',
    marginBottom: '15px',
  };
});

export const DetectButton = styled('button')(() => {
  return {
    fontSize: '1.5rem',
    padding: '10px 20px',
    borderRadius: '3px',
    backgroundColor: '#9575cd',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    height: 51,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#7e57c2',
    },
    '@media (max-width: 391px)': {
      fontSize: 20,
      padding: 10,
    },
  };
});

export const Parafraph = styled('p')(() => {
  return {
    color: 'black',
    fontWeight: 600,
    marginBottom: 20,
    '@media (max-width: 768px)': {
      margin: 10,
      marginBottom: 20,
    },
    '@media (max-width: 391px)': {
      margin: 10,
      marginBottom: 0,
    },
  };
});
