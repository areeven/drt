import { createUser, getUsersHandler } from "../controllers/UserController";
import { Router } from "express";

const userRoute: string = "/users";

const routes = (router: Router) => {
  router.post(userRoute, createUser);
  router.get(userRoute, getUsersHandler);
};

export default routes;
