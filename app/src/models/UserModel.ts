import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  admin: Boolean,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);

class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  admin: boolean;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.admin = admin;
  }

  // Example method
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getAdmin(): boolean {
    return this.admin;
  }
}

export { User, UserModel };
