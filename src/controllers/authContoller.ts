import { NextFunction, Request, Response } from "express";
import { OK } from "http-status-codes";
import { Container } from "typedi";
import UserService from "../services/authService";

export class AuthController {
    static signup = async (req: Request, res: Response, next: NextFunction) => {
        const authService = Container.get(UserService);
        const result = await authService.signup();
        res.status(OK).send(result);
    };
}
