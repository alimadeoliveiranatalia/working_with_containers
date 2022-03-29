import { getRepository, Repository } from "typeorm";
import { Livro } from "../../entities/Livro";
import { ICreateLivroDTO, ILivroRepository } from "../ILivroRepository";

export class LivroRepository implements ILivroRepository{
    private repository : Repository<Livro>;

    constructor(){
        this.repository = getRepository(Livro);
    }

    async create({
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
    }: ICreateLivroDTO): Promise<Livro>{
        const livro_created = this.repository.create({
            name_livro,
            autor,
            ic_venda,
            preco_renovacao_aluguel,
            ic_importado,
            quantidade,
            preco_venda,
            preco_aluguel,
            ano_publicacao: new Date(),
            editora,
            assunto
        });
        await this.repository.save(livro_created);
        return livro_created;
    }
    async findLivroByAssunto(assunto: string): Promise<Livro> {
        const findLivro = await this.repository.findOne(assunto);
        return findLivro!;
    }
    async findLivroByAutor(autor: string): Promise<Livro> {
        const findLivro = await this.repository.findOne(autor);
        return findLivro!;
    }
    async findLivroByEditora(editora: string): Promise<Livro> {
        const findLivro = await this.repository.findOne(editora);
        return findLivro!;
    }
    async list(): Promise<Livro[]> {
        const all_livros = await this.repository.find();
        return all_livros;
    }
}