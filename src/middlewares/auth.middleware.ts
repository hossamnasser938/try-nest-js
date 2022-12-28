import { NextFunction, Request, Response } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization === "Hossam") {
        next()
    }
    else {
        res.status(401).send("Unauthorized")
    }
}