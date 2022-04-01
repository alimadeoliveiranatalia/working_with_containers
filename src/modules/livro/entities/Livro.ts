import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Assunto } from "./Assunto";
import { Autor } from "./Autor";
import { Editora } from "./Editora";
@Entity("tb_livro")
export class Livro {
    @PrimaryGeneratedColumn("uuid")
    cod_ISBN: string;

    @Column()
    name_livro!: string;

    @OneToOne(()=> Autor)
    @JoinColumn()
    autor!: Autor;

    @Column()
    ic_venda!: number;

    @Column()
    preco_renovacao_aluguel!: number;

    @Column()
    ic_importado!: number;

    @Column()
    quantidade!: number;

    @Column()
    preco_venda!: number;

    @Column()
    preco_aluguel!: number;

    @Column()
    ano_publicacao!: Date;

    @OneToOne(()=> Editora)
    @JoinColumn()
    editora!: Editora;

    @OneToOne(()=> Assunto)
    @JoinTable()
    assunto!: Assunto;

    constructor(){
        this.cod_ISBN = uuid();
    }


}