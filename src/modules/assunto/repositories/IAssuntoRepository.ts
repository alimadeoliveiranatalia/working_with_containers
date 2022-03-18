import { Assunto } from "../entities/Assunto";

interface ICreateUserDTO {
    assunto: string;
}

interface IAssuntoRepository {
    create({ assunto }: ICreateUserDTO) : Assunto;
    list() : Assunto[];
}

export { IAssuntoRepository, ICreateUserDTO };