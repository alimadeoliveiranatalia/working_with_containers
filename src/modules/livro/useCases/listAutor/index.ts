import { AutorRepository } from "../../repositories/implementations/AutorRepository";
import { ListAutorController } from "./ListAutorController";
import { ListAutorUsecase } from "./ListAutorUseCase";

export default(): ListAutorController => {
    
    const autorRepository = new AutorRepository();

    const listAutorUseCase = new ListAutorUsecase(autorRepository);

    const listAutorController = new ListAutorController(listAutorUseCase);

    return listAutorController;
}