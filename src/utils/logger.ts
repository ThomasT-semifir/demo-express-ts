import { NextFunction, Request, Response } from "express"

export const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.url, "\n",req.params, "\n",req.query)
    next()
}