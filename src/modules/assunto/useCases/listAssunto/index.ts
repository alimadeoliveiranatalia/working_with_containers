import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";
import { ListAllAssuntosController } from "./listAllAssuntosController";
import { ListAllAssuntosUseCase } from "./listAllAssuntosUseCase";

const assuntosRepository = AssuntosRepository.getInstance();
const listAllAssuntosUseCase = new ListAllAssuntosUseCase(assuntosRepository);
const listAllAssuntosController = new ListAllAssuntosController(listAllAssuntosUseCase);

export { listAllAssuntosController };