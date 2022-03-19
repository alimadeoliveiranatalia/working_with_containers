import { Autor } from "../../entities/Autor";
import { AutoresRepository } from "../../repositories/implementations/AutorRepository";

class ListAllAutoresUseCase{
    constructor(private autoresRepository: AutoresRepository) {}
    execute(): Autor[] {
        const all_autores = this.autoresRepository.list();
        return all_autores;
    }
}
export { ListAllAutoresUseCase }