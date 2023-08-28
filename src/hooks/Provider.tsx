import useLocalStorage from 'use-local-storage';

import { useState } from 'react';

import { UserData } from '../components/MainApp/MainApp.types';
/**
 * Imports the context
 */
import { context, ProviderProps, ProviderValues } from '../hooks/Contex';

/**
 * Display AuthProvider
 */
export const AuthProvider: React.FC<ProviderProps> = (props) => {
  const { Provider } = context;
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    'isAuthenticated',
    false
  );

  /**
   * Initializes the user In state
   */
  const [user, setUser] = useLocalStorage<UserData>('user', {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const providerValue: ProviderValues = {
    isAuthenticated,
    user,
    login,
    logout,
    setUser,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
