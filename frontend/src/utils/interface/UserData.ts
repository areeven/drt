export interface UserDataObject {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  admin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserObject {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  admin: boolean;
}
