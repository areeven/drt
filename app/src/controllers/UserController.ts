import Logger from "../utils/Logger";
import StatusCode from "../configurations/StatusCode";
import { UserModel, User } from "../models/UserModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const saltRounds: number = 10;
const encryptPassword = async (password: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error("Password encryption failed");
  }
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const getUsers = async () => {
  try {
    const users = await UserModel.find();

    if (!users || users.length === 0) {
      Logger.warn("No users found");
      return []; // Return an empty array if no users found
    } else {
      Logger.info("Users fetched successfully");
      return users;
    }
  } catch (error) {
    Logger.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getUsers(); // Assuming getUsers is an asynchronous function that retrieves users

    // Check if users array is empty
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Send users as JSON response
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, email, password, admin } = req.body;
    password = await encryptPassword(password);

    if (isValidEmail(email)) {
      if (email === undefined || password === undefined) {
        res.status(400).json({ message: "Email and password are required" });
        return;
      }
    } else {
      res.status(400).json({ message: "Invalid email" });
      return;
    }

    const newUser = new User(firstName, lastName, email, password, admin);
    const savedUser = await UserModel.create(newUser);

    res.status(201).json(savedUser);
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      res.status(409).json({ message: "Email is already in use" }); // 409 Conflict
    } else {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export { getUsers, createUser, getUsersHandler };
