import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("tb_autor")
class Autor {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name!: string;

    @CreateDateColumn()
    created_at!: Date;

    @CreateDateColumn()
    updated_at!: Date;

    constructor(){
        this.id = uuidv4();
    }
}
export { Autor }