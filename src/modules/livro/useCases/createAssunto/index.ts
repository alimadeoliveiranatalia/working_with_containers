
import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";
import { CreateAssuntoController } from "./CreateAssuntoController";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

export default (): CreateAssuntoController => {
    const assuntosRepository = new AssuntosRepository();

    const createAssuntoUseCase = new CreateAssuntoUseCase(assuntosRepository);
    
    const createAssuntoController = new CreateAssuntoController(createAssuntoUseCase);

    return createAssuntoController;
}