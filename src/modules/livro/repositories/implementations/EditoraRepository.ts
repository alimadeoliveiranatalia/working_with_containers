import { getRepository, Repository } from "typeorm";
import { Editora } from "../../entities/Editora";
import { ICreateEditoraDTO, IEditoraRepository } from "../IEditoraRepository";

export class EditoraRepository implements IEditoraRepository{
    private repository : Repository<Editora>;

    constructor(){
        this.repository = getRepository(Editora);
    }

    async create({ name_editora }: ICreateEditoraDTO): Promise<Editora> {
        const editora_created = this.repository.create({
            name_editora
        });
        await this.repository.save(editora_created);
        return editora_created;
    }

    async findByEditora(name_editora: string): Promise<Editora> {
        const find_editoras = await this.repository.findOne({ name_editora });
        return find_editoras!;
    }

    async list(): Promise<Editora[]> {
        const all_editoras = await this.repository.find();
        return all_editoras;
    }
}