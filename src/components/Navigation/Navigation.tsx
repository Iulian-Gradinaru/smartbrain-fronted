import React from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Imports styles
 */
import { Container } from './Navigation.styles';

/**
 * Imports types
 */
import { NavigationProps } from './Navigation.types';
import { useAuth } from '../../hooks';

/**
 * Displays the component
 */
export const Navigation: React.FC<NavigationProps> = () => {
  const { logout, setUser, isAuthenticated } = useAuth();
  const history = useHistory();

  const onRouteChange = (route: string) => {
    if (route === 'signout') {
      logout();
      setUser({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      });
      history.push('/signin');
    }

    if (route === 'signin') {
      history.push('/signin');
    }

    if (route === 'register') {
      history.push('/register');
    }
  };

  return (
    <Container>
      {isAuthenticated ? (
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black underline pa3 pointer white"
        >
          {' '}
          Sign Out
        </p>
      ) : (
        <>
          <p
            onClick={() => onRouteChange('signin')}
            className="f3 link dim black underline pa3 pointer white"
          >
            {' '}
            Sign In
          </p>
          <p
            onClick={() => onRouteChange('register')}
            className="f3 link dim black underline pa3 pointer white"
          >
            {' '}
            Register
          </p>
        </>
      )}
    </Container>
  );
};
