import { Editora } from "../entities/Editora";

interface ICreateEditoraDTO {
    name_editora: string;
}
interface IEditoraRepository {
    create({ name_editora }: ICreateEditoraDTO): Promise<Editora>;
    findByEditora(name_editora: string): Promise<Editora>;
    list() : Promise<Editora[]>
}
export { ICreateEditoraDTO, IEditoraRepository }