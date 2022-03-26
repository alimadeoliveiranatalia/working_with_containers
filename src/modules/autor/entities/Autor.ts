//import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

//@Entity("assuntos")
class Autor {
    //@PrimaryColumn()
    cod_autor: string;

    //@Column()
    nome_autor!: string;

    //@CreateDateColumn()
    created_at!: Date;

    //@CreateDateColumn()
    updated_at!: Date;

    constructor(){
        this.cod_autor = uuidv4();
    }
}
export { Autor };