import { Livro } from "../../entities/Livro";
import { LivroRepository } from "../../repositories/implementations/LivroRespository";

interface Irequest {
    name_livro: string;
    autor: number;
    ic_venda: number;
    preco_renovacao_aluguel: number;
    ic_importado: number;
    quantidade: number;
    preco_venda: number;
    preco_aluguel: number;
    ano_publicacao: Date;
    editora: string;
    assunto: string;
}
export class CreateLivroUseCase {
    constructor(private livroRepository: LivroRepository) {}
    async execute({
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
    }: Irequest): Promise<Livro> {
        const livroAlreadyExists = await this.livroRepository.findLivroByAssunto(assunto);
        if(livroAlreadyExists){
            throw new Error("Livro já cadastrado!");
            
        }
        const livro_created = this.livroRepository.create({
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
        return livro_created;
    }
}