import { Editora } from "../../entities/Editora";
import { IEditoraRepository } from "../../repositories/IEditoraRepository";

export class ListEditoraUseCase {
    constructor(private editoraRepository: IEditoraRepository) {}
    async execute(): Promise<Editora[]> {
        const all_editora = await this.editoraRepository.list();
        return all_editora;
    }
}