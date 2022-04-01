import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tb_assunto")
class Assunto {
    @PrimaryGeneratedColumn("uuid")
    cod_assunto: string;

    @Column()
    assunto!: string;

    @CreateDateColumn()
    created_at!: Date;

    constructor(){
        this.cod_assunto = uuid();
    }

}
export { Assunto }