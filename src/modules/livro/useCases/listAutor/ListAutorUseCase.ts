import { Autor } from "../../entities/Autor";
import { IAutorRepository } from "../../repositories/IAutorRepository";

export class ListAutorUsecase {
    constructor(private autorRepository: IAutorRepository) {}
    async execute(): Promise<Autor[]> {
        const all_autores = await this.autorRepository.list();
        return all_autores;
    }
}