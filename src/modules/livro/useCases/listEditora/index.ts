import { EditoraRepository } from "../../repositories/implementations/EditoraRepository";
import { ListEditoraController } from "./ListEditoraController";
import { ListEditoraUseCase } from "./ListEditoraUseCase";

export default(): ListEditoraController => {

    const editoraRepository = new EditoraRepository();

    const listEditoraUseCase = new ListEditoraUseCase(editoraRepository);

    const listEditoraController = new ListEditoraController(listEditoraUseCase);

    return listEditoraController;
}