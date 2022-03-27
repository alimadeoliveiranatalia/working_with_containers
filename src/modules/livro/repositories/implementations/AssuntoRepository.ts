import { getRepository, Repository } from "typeorm";
import { Assunto } from "../../entities/Assunto";
import { IAssuntoRepository, ICreateUserDTO } from "../IAssuntoRepository";


class AssuntosRepository implements IAssuntoRepository {
    private repository : Repository<Assunto>;

    constructor() {
        this.repository = getRepository(Assunto);
    }

    async create( {assunto} : ICreateUserDTO): Promise<Assunto> {
        const assunto_created = this.repository.create({
            assunto,
            created_at: new Date(),
        });
        await this.repository.save(assunto_created);
        return assunto_created;
    }
    async findByAssunto(assunto: string): Promise<Assunto> {
        const findAssunto = await this.repository.findOne({ assunto });
        return findAssunto!;
    }

    async list(): Promise<Assunto[]> {
        const all_assuntos = await this.repository.find();
        return all_assuntos;
    }
}
export { AssuntosRepository }