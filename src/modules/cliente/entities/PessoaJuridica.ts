import { v4 as uuid } from "uuid";
export class PessoaJuridica {
    id_cliente: string;

    fantasy_name!:string;

    cnpj!:string;

    opening_date!:Date;

    constructor(){
        this.id_cliente=uuid();
    }
}