import { Request, Response } from "express";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

export class CreateAutorController {
    constructor(private createAutorUseCase: CreateAutorUseCase) {}
    async handle(request: Request, response: Response) : Promise<Response> {
        const { name } = request.body;
        try {
            const autor_created = await this.createAutorUseCase.execute({ name });
            return response.status(201).json(autor_created);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}