import { Assunto } from "../entities/Assunto";

interface ICreateUserDTO {
    assunto: string;
}

interface IAssuntoRepository {
    create({ assunto }: ICreateUserDTO) : Promise<Assunto>;
    findByAssunto(assunto: string): Promise<Assunto>;
    list() : Promise<Assunto[]>;
}

export { IAssuntoRepository, ICreateUserDTO };