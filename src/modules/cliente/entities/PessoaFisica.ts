import { v4 as uuid } from "uuid";

export class PessoaFisica {
    
    id_client:string;

    cpf!:string;

    rg!:string;

    data_nascimento!:Date;


    constructor(){
        this.id_client = uuid();
    }
}