import { AutoresRepository } from "../../repositories/implementations/AutorRepository";
import { CreateAutorController } from "./CreateAutorController";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

const autorRepository = AutoresRepository.getInstance();
const createAutorUseCase = new CreateAutorUseCase(autorRepository);
const createAutorController = new CreateAutorController(createAutorUseCase);

export { createAutorController }