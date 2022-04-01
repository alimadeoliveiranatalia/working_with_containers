import { v4 as uuid } from "uuid";
export class Cliente {
    id: string;

    name!: string;

    created_at!: Date;

    constructor(){
        this.id = uuid();
    }
}