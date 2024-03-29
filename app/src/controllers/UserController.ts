import Logger from "../utils/Logger";
import StatusCode from "../configurations/StatusCode";
import { UserModel, User } from "../models/UserModel";
import { Request, Response } from "express";
import { SearchUser } from "../utils/interface/Interface";
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

const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getUsers(); // Assuming getUsers is an asynchronous function that retrieves users
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

interface VerifyUser {
  message: boolean;
}

const verifyUser = async (req: Request, res: Response) => {
  try {
    // Query
    const { email, password } = req.body;
    const query: SearchUser = { email: String(email) };
    const dbQuery = await UserModel.find(query);
    Logger.debug(dbQuery);

    // Verify password in bcrypt
    let response: VerifyUser = { message: false }; // Initialize response with an initial value
    await bcrypt
      .compare(String(password), dbQuery[0].password)
      .then((result) => {
        Logger.debug("bcrypt");
        response = {
          message: result,
        };
      });
    Logger.debug(response);
    res.status(StatusCode.OK).send(response);
  } catch (error: any) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message: `Error while trying to retrieve user with email: ${req.query.email}`,
      error: error.message,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId).exec();
    Logger.info("User fetched successfully");
    return res.status(StatusCode.OK).json(user);
  } catch (error) {
    Logger.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserWithEmail = async (req: Request, res: Response) => {
  try {
    Logger.debug(`${req.query.email}`);
    const { email } = req.query;
    const query: SearchUser = { email: String(email) };
    Logger.http(`Name: ${email}`);
    const response = await UserModel.find(query);
    Logger.debug(response);
    response.length !== 0
      ? res.status(StatusCode.OK).send(response)
      : res
          .status(StatusCode.NOT_FOUND)
          .send({ message: `Couldn't find user with email: ${email}` });
  } catch (error: any) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message: `Error while trying to retrieve user with email: ${req.query.email}`,
      error: error.message,
    });
  }
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

export {
  getUserById,
  getUsers,
  createUser,
  verifyUser,
  getUsersHandler,
  getUserWithEmail,
};
