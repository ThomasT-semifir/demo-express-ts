import { Request, Response } from "express";
import { User } from "../models/User"

class UserController {

    public async findAll(req: Request, res: Response) {
        const users= await User.find()
        res.status(200)
            .json(users)
    }

}

export const userController = Object.freeze(new UserController())