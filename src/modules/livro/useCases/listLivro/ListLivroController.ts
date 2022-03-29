import { Request, Response } from "express";
import { ListLivroUseCase } from "./ListLivroUseCase";

export class ListLivroController {
    constructor(private listLivroUseCase: ListLivroUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const all_livros = await this.listLivroUseCase.execute();
        return response.json(all_livros);
    }
}