import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("tb_autor")
class Autor {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name!: string;

    @CreateDateColumn()
    created_at!: Date;

    @CreateDateColumn()
    updated_at!: Date;

    constructor(){
        this.id = uuid();
    }
}
export { Autor }