import { Request, Response } from "express";
import { CreateLivroUseCase } from "./CreateLivroUseCase";

export class CreateLivroController {
    constructor(private createLivroUseCase: CreateLivroUseCase) {}
    async handle(request: Request, response: Response) : Promise<Response> {
        const {
            name_livro,
            autor,
            ic_venda,
            preco_renovacao_aluguel,
            ic_importado,
            quantidade,
            preco_venda,
            preco_aluguel,
            ano_publicacao,
            editora,
            assunto
        } = request.body;
        try {
            const livro_created = await this.createLivroUseCase.execute({
                name_livro,
                autor,
                ic_venda,
                preco_renovacao_aluguel,
                ic_importado,
                quantidade,
                preco_venda,
                preco_aluguel,
                ano_publicacao,
                editora,
                assunto
            });
            return response.status(201).json(livro_created);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}