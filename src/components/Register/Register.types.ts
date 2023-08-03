/**
 * Defines the component props interface
 */
export interface RegisterProps {
  onRouteChange: (route: string) => void;
  loadUser: (data: any) => void;
}
