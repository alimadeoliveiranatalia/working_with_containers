import { EditoraRepository } from "../../repositories/implementations/EditoraRepository";
import { Editora } from "../../entities/Editora";
interface IRequest {
    name_editora: string;
}
export class CreateEditoraUseCase {
    constructor(private editoraRepository: EditoraRepository) {}
    async execute({ name_editora }: IRequest): Promise<Editora> {
        const editoraAlreadyExists = await this.editoraRepository.findByEditora(name_editora);
        if (editoraAlreadyExists) {
            throw new Error("Esta Editora já possui cadastro!");
        }
        const editora_created = this.editoraRepository.create({ name_editora });
        return editora_created;
    } 
}