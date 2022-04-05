import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("tb_users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    isAdmin!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    constructor(){ 
        this.id = uuid()
    }
}