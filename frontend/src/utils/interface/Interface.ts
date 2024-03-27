export interface AuthenticatedUser {
  email?: string;
  password?: string;
}

export interface VerifiedUser {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password: string;
}

export interface UserDataObject {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
