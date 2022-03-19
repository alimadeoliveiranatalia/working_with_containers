import { Request, Response } from "express";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

class CreateAutorController {
    constructor(private createAutorUseCase: CreateAutorUseCase) {

    }
    handle(request: Request, response: Response): Response {
        const { nome_autor } = request.body;
        const autor_created = this.createAutorUseCase.execute({ nome_autor });
        return response.status(201).json(autor_created);
    }
}
export { CreateAutorController }