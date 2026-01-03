import { UserController } from "@/controllers/users-controllers";
import { Router } from "express";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create);

export { userRoutes };
