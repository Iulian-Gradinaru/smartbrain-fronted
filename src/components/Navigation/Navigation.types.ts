/**
 * Defines the component props interface
 */
export interface NavigationProps {
  onRouteChange: (route: string) => void;
  isSignedIn: boolean;
}
