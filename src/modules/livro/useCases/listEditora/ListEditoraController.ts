import { Request, Response } from "express";
import { ListEditoraUseCase } from "./ListEditoraUseCase";

export class ListEditoraController {
    constructor(private listEditoraUseCase: ListEditoraUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const all_editora = await this.listEditoraUseCase.execute();
        return response.json(all_editora);
    }
}