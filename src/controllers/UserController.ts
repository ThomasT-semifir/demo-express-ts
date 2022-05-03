import { userService } from './../services/UserService';
import { Request, Response } from "express";
import { User } from "../models/User"

class UserController {
    public findAll(req: Request, res: Response) {
        userService.findAll().then(data => res.status(200).json(data))
    }

    public findById(req: Request, res: Response) {
        User.findById(req.params.id)
            .then(
                data => res.status(200)
                            .json(data)
            )
    }

    public async create(req: Request, res: Response){
        res.status(201)
            .json(await User.create(req.body))
    }

    public delete(req: Request, res: Response){
        User.findByIdAndDelete(req.params.id)
            .then(data=> res.json(data))
    }

    public replace(req: Request, res: Response){
        User.findOneAndReplace({_id:req.params.id}, req.body).then(data => res.json(data))
    }

    public partialUpdate(req: Request, res: Response){
        User.findByIdAndUpdate(req.params.id, req.query).then(data => res.status(202).json(data))
    }

    public search(req: Request, res: Response){
        User.findOne(req.query).then(data => res.status(200).json(data))
    }

}

export const userController = Object.freeze(new UserController());