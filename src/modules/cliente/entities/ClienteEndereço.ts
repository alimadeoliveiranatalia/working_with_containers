import { v4 as uuid } from "uuid";
export class ClienteEndereco {
    id_endereco:string;

    cliente!:string;

    endereco_desc!:string;

    complemento!:string;

    numero_endereco!:number;

    bairro!:string;

    cidade!:string;

    cep!:string;

    estado!:string;

    tipo_residencia!:number;
    

    constructor(){
        this.id_endereco = uuid();
    }
}