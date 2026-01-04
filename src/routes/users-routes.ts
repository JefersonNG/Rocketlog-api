import { UserController } from "../controllers/users-controllers.js";
import { Router } from "express";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create);

export { userRoutes };
