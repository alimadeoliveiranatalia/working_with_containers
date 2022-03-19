import { Autor } from "../../entities/Autor";
import { AutoresRepository } from "../../repositories/implementations/AutorRepository";

interface IRequest {
    nome_autor: string;
}

class CreateAutorUseCase {
    constructor(private autorRepository: AutoresRepository) {

    }
    execute({ nome_autor }: IRequest): Autor {

        const autor_created = this.autorRepository.create({ nome_autor });
        return autor_created;
    }
}

export { CreateAutorUseCase }