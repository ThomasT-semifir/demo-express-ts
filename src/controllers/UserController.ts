import { Request, Response } from "express";
import { User } from "../models/User"

const users: User[] = [
    new User(1, "Timio", "Thomas", 27),
    new User(2, "Trabendo", "Michel", 45)
];
class UserController {

    public findAll(req: Request, res: Response): void {
        res.send(users);
    }
}

export const userController = Object.freeze(new UserController())