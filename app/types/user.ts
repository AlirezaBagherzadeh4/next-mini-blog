export interface IUserProfile {
  id: number;
  name: string;
  family: string;
  email: string;
  mobile: string;
  dob?: string;
  favorites?: string[];
  bio?: string;
}

export interface IFavoriteOption {
  id: number;
  label: string;
}
