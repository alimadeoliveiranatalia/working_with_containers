import { Request, Response } from "express";
import { CreateEditoraUseCase } from "./CreateEditoraUseCase";

export class CreateEditoraController {
    constructor(private createEditoraUseCase: CreateEditoraUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name_editora } = request.body;
        try {
            const editora_created = await this.createEditoraUseCase.execute({ name_editora });
            return response.status(201).json(editora_created);
        }
        catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}