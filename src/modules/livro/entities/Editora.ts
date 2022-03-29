import { v4 as uuid } from "uuid";

export class Editora {
    cod_editora:string;

    name_editora!: string;

    constructor(){
        this.cod_editora = uuid();
    }
}