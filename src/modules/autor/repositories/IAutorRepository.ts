import { Autor } from "../entities/Autor";

interface ICreateAutorDTO {
    nome_autor: string;
}
interface IAutorRepository {
    create({ nome_autor }: ICreateAutorDTO): Autor;
    list() : Autor[];
}
export { IAutorRepository, ICreateAutorDTO };