import { AutoresRepository } from "../../repositories/implementations/AutorRepository";
import { ListAllAutoresController } from "./ListAllAutoresController";
import { ListAllAutoresUseCase } from "./ListAllAutoresUseCase";

const autoresRepository = AutoresRepository.getInstance();
const listAllAutoresUseCase = new ListAllAutoresUseCase(autoresRepository);
const listAllAutoresController = new ListAllAutoresController(listAllAutoresUseCase);

export { listAllAutoresController };