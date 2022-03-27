import { Assunto } from "../../entities/Assunto";
import { IAssuntoRepository } from "../../repositories/IAssuntoRepository";

class ListAllAssuntosUseCase {
    constructor(private assuntosRepository: IAssuntoRepository) {}

    async execute() : Promise<Assunto[]> {
        const all_assuntos = await this.assuntosRepository.list();
        return all_assuntos;
    }
}
export { ListAllAssuntosUseCase };