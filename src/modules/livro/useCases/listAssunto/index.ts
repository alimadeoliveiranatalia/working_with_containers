import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";
import { ListAllAssuntosController } from "./listAllAssuntosController";
import { ListAllAssuntosUseCase } from "./listAllAssuntosUseCase";

export default (): ListAllAssuntosController => {

    const assuntosRepository = new  AssuntosRepository();

    const listAllAssuntosUseCase = new ListAllAssuntosUseCase(assuntosRepository);

    const listAllAssuntosController = new ListAllAssuntosController(listAllAssuntosUseCase);

    return listAllAssuntosController;
    
}