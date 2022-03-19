import { v4 as uuidv4 } from "uuid";

class Autor {
    cod_autor: string;
    nome_autor!: string;
    created_at!: Date;
    updated_at!: Date;

    constructor(){
        this.cod_autor = uuidv4();
    }
}
export { Autor };