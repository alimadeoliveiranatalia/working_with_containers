import { v4 as uuidv4 } from "uuid";
class Autor {
    id: string;
    name!: string;
    created_at!: Date;
    updated_at!: Date;

    constructor(){
        this.id = uuidv4();
    }
}
export { Autor }