import { EditoraRepository } from "../../repositories/implementations/EditoraRepository";
import { CreateEditoraController } from "./CreateEditoraController";
import { CreateEditoraUseCase } from "./CreateEditoraUseCase";

export default (): CreateEditoraController => {
    const editoraRepository = new EditoraRepository();

    const createEditoraUseCase = new CreateEditoraUseCase(editoraRepository);

    const createEditoraController = new CreateEditoraController(createEditoraUseCase);

    return createEditoraController;
}