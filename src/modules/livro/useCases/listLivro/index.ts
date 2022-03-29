import { LivroRepository } from "../../repositories/implementations/LivroRespository";
import { ListLivroController } from "./ListLivroController";
import { ListLivroUseCase } from "./ListLivroUseCase";

export default (): ListLivroController => {
    const listLivroRepository = new LivroRepository();

    const listLivroUseCase = new ListLivroUseCase(listLivroRepository);

    const listLivroController = new ListLivroController(listLivroUseCase);

    return listLivroController;
}