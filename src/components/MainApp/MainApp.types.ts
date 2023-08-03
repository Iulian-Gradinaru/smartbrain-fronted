/**
 * Defines the component props interface
 */
export interface Region {
  region_info: {
    bounding_box: {
      left_col: number;
      top_row: number;
      right_col: number;
      bottom_row: number;
    };
  };
}

/**
 * Defines the component props interface
 */
export interface UserData {
  id: string;
  name: string;
  email: string;
  entries: number;
  joined: string;
}
