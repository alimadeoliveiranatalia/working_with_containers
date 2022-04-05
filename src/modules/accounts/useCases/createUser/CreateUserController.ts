import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase){}
    async handle(request: Request, response: Response) : Promise<Response> {
        const data = request.body;

        try {
            const user = await this.createUserUseCase.execute(data);

            return response.status(201).json(user);
        } catch (error: any) {
            return response.status(400).json({ error: error.message})
        }

    }
}
export { CreateUserController }