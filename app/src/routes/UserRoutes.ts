import {
  createUser,
  getUsersHandler,
  getUserById,
  verifyUser,
} from "../controllers/UserController";
import { Router } from "express";

const userRoute: string = "/users";
const verifyUserUrl: string = `/verifyUser`;

const routes = (router: Router) => {
  router.post(userRoute, createUser);
  router.get(userRoute, getUsersHandler);
  router.get(`${userRoute}/:id`, getUserById);
  router.post(verifyUserUrl, verifyUser);
};

export default routes;
