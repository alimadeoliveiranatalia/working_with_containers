import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserCase";

class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase){}

    async handle(request: Request, response: Response) : Promise<Response> {
        const { password, email } = request.body;
        try {
            const userAuth = await this.authenticateUserUseCase.execute({
                email,
                password
            });
            return response.status(201).json(userAuth);
        } catch (error: any) {
            return response.status(400).json({erro: error.message});
            
        }
        
    }
}
export { AuthenticateUserController }