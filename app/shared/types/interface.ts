export interface IFavorite {
  id: number;
  value: string;
  label: string;
}

export interface IUserProfile {
  id: number;
  name: string;
  family: string;
  email: string;
  mobile: string;
  dob: string;
  favorites: string[];
  bio: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  author: string;
  image: string;
}
