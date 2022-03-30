import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("tb_editora")
export class Editora {
    @PrimaryColumn()
    cod_editora:string;
    
    @Column()
    name_editora!: string;

    constructor(){
        this.cod_editora = uuid();
    }
}