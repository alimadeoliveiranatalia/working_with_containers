import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository }  from "../modules/accounts/repositories/implementations/UsersRepository"

interface Ipayload {
    sub: string;
}
export async function enchureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error("Token missing");        
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "ee11cbb19052e40b07aac0ca060c23ee"
        ) as Ipayload;

        const usersRepository = new UserRepository();

        const findUser = await usersRepository.findById(user_id);

        if(!findUser) {
            throw new Error("User does not exists!");
        }
        next();

    } catch (error) {
        throw new Error("Invalid token!");
    }
}