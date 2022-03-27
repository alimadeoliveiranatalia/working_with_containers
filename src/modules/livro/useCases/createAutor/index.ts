import { AutorRepository } from "../../repositories/implementations/AutorRepository";
import { CreateAutorController } from "./CreateAutorController";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

export default (): CreateAutorController => {
    const autorRepository = new AutorRepository();

    const createAutorUseCase = new CreateAutorUseCase(autorRepository);

    const createAutorController = new CreateAutorController(createAutorUseCase);

    return createAutorController;
}