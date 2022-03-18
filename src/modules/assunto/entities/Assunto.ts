import { v4 as uuidv4 } from "uuid";

class Assunto {
    cod_assunto: string;
    assunto!: string;
    created_at!: Date;

    constructor(){
        this.cod_assunto = uuidv4();
    }

}
export { Assunto }