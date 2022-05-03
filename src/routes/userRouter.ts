import { userController } from './../controllers/UserController';
import { Router } from "express";

const controller = userController;

const router: Router = Router();

router.get("/users", controller.findAll)
router.get("/users/search", controller.search)
router.post("/users", controller.create)
router.get("/users/:id", controller.findById)
router.delete("/users/:id", controller.delete)
router.put("/users/:id", controller.replace)
router.patch("/users/:id", controller.partialUpdate)


export { router as userRouter }