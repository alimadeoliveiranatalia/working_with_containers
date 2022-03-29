import { v4 as uuid } from "uuid";
export class Livro {
    cod_ISBN: string;

    name_livro!: string;

    autor!: number;

    ic_venda!: number;

    preco_renovacao_aluguel!: number;

    ic_importado!: number;

    quantidade!: number;

    preco_venda!: number;

    preco_aluguel!: number;

    ano_publicacao!: Date;

    editora!: string;

    assunto!: string;

    constructor(){
        this.cod_ISBN = uuid();
    }


}