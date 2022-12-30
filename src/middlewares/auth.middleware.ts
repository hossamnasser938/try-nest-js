import { HttpException, HttpStatus } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization === "Hossam") {
        next()
    }
    else {
        throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)
    }
}