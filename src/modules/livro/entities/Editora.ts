import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("tb_editora")
export class Editora {
    @PrimaryGeneratedColumn("uuid")
    cod_editora:string;
    
    @Column()
    name_editora!: string;

    constructor(){
        this.cod_editora = uuid();
    }
}