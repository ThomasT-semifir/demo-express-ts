import { userController } from './../controllers/UserController';
import { Router } from "express";

const router: Router = Router();
const controller = userController;

router.get("/users", controller.findAll)

export {router as userRouter}