import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("assuntos")
class Assunto {
    @PrimaryColumn()
    cod_assunto: string;

    @Column()
    assunto!: string;

    @CreateDateColumn()
    created_at!: Date;

    constructor(){
        this.cod_assunto = uuidv4();
    }

}
export { Assunto }