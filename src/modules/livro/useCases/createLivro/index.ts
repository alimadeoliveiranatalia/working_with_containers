import { LivroRepository } from "../../repositories/implementations/LivroRespository";
import { CreateLivroController } from "./CreateLivroController";
import { CreateLivroUseCase } from "./CreateLivroUseCase";

export default (): CreateLivroController => {
    const livroRepository = new LivroRepository();

    const createLivroUseCase = new CreateLivroUseCase(livroRepository);

    const createLivroController = new CreateLivroController(createLivroUseCase);

    return createLivroController;
}