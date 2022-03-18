import { Assunto } from "../../entities/Assunto";
import { IAssuntoRepository } from "../../repositories/IAssuntoRepository";

class ListAllAssuntosUseCase {
    constructor(private assuntosRepository: IAssuntoRepository) {}

    execute() : Assunto[] {
        const all_assuntos = this.assuntosRepository.list();
        return all_assuntos;
    }
}
export { ListAllAssuntosUseCase };