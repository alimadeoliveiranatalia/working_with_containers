import { Autor } from "../entities/Autor";

interface ICreateAutorDTO {
    name: string;
}
interface IAutorRepository {
    create({ name }: ICreateAutorDTO): Promise<Autor>;
    findByAutor(name: string): Promise<Autor>;
    list() : Promise<Autor[]>;
}
export { IAutorRepository, ICreateAutorDTO }