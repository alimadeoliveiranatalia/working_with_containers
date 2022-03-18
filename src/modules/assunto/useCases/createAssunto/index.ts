import { AssuntosRepository } from "../../repositories/implementations/AssuntoRepository";
import { CreateAssuntoController } from "./CreateAssuntoController";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

const assuntosRepository = AssuntosRepository.getInstance();
const createAssuntoUseCase = new CreateAssuntoUseCase(assuntosRepository);
const createAssuntoController = new CreateAssuntoController(createAssuntoUseCase);

export { createAssuntoController };