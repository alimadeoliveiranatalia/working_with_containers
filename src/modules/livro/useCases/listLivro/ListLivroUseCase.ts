import { Livro } from "../../entities/Livro";
import { LivroRepository } from "../../repositories/implementations/LivroRespository";

export class ListLivroUseCase {
    constructor(private livroRepository: LivroRepository) {}
    async execute(): Promise<Livro[]> {
        const all_livros = await this.livroRepository.list();
        return all_livros;
    }
}