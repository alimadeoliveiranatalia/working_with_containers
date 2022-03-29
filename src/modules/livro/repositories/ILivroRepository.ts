import { Livro } from "../entities/Livro";

export interface ICreateLivroDTO {
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

export interface ILivroRepository {
    create({
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
    }: ICreateLivroDTO): Promise<Livro>;
    findLivroByAssunto(assunto: string): Promise<Livro>;
    findLivroByAutor(autor: string): Promise<Livro>;
    findLivroByEditora(editora: string): Promise<Livro>;
    list() : Promise<Livro[]>;
}