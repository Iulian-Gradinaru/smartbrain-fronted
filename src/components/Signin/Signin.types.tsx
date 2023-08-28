/**
 * Defines the component props interface
 */
export interface SigninProps {
  onRouteChange: (route: string) => void;
  loadUser: (data: any) => void;
}
