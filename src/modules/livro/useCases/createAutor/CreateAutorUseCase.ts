import { Autor } from "../../entities/Autor";
import { AutorRepository } from "../../repositories/implementations/AutorRepository";

interface IRequest {
    name: string
}

export class CreateAutorUseCase {
    constructor(private autorRepository: AutorRepository) {

    }
    async execute ({ name }: IRequest): Promise<Autor> {
        const autorAlreadyExists = await this.autorRepository.findByAutor(name);
        if(autorAlreadyExists){
            throw new Error("Este Autor já possui cadastro!");
        }
        const autor_created = this.autorRepository.create({ name });
        return autor_created;
    }
}