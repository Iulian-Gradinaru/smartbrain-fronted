/**
 * Defines the provider value
 */
import { useContext } from 'react';

/**
 *  Imports the context
 */
import { context } from './Contex';

/**
 * Imports the provider
 */
import { AuthProvider } from './Provider';

/**
 * Defines the main hook
 */
const useAuth = () => useContext(context);

export { useAuth, AuthProvider };
