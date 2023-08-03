import React from 'react';

/**
 * Imports styles
 */
import { Container } from './Navigation.styles';

/**
 * Imports types
 */
import { NavigationProps } from './Navigation.types';

/**
 * Displays the component
 */
export const Navigation: React.FC<NavigationProps> = (props) => {
  const { onRouteChange, isSignedIn } = props;

  return (
    <Container>
      {isSignedIn ? (
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
