import { Assunto } from "../../entities/Assunto";
import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";

interface IRequest {
    assunto: string
}

class CreateAssuntoUseCase {
    constructor(private assuntoRepository: AssuntosRepository){

    }
    execute({assunto}: IRequest): Assunto {
        
        const assunto_created = this.assuntoRepository.create({assunto});
        return assunto_created;
    }
}
export { CreateAssuntoUseCase }