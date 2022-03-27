import { Assunto } from "../../entities/Assunto";
import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";

interface IRequest {
    assunto: string
}

class CreateAssuntoUseCase {
    constructor(private assuntoRepository: AssuntosRepository){

    }
    async execute({assunto}: IRequest): Promise<Assunto> {
        const assuntoAlreadyExists = await this.assuntoRepository.findByAssunto(assunto);
        if (assuntoAlreadyExists) {
            throw new Error("Este tema já existe!");
            
        }
        const assunto_created = this.assuntoRepository.create({assunto});
        return assunto_created;
    }
}
export { CreateAssuntoUseCase }