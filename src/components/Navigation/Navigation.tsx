import React from 'react';

import { NavigationProps } from './Navigation.types';

export const Navigation: React.FC<NavigationProps> = ({
  onRouteChange,
  isSignedIn,
}) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
    </nav>
  );
};
