import { Assunto } from "../../entities/Assunto";
import { IAssuntoRepository, ICreateUserDTO } from "../IAssuntoRepository";


class AssuntosRepository implements IAssuntoRepository {
    private assuntos = Assunto[];

    private static INSTANCE: AssuntosRepository;

    private constructor() {
        this.assuntos = [];
    }

    public static getInstance(): AssuntosRepository {
        if (!AssuntosRepository.INSTANCE) {
            AssuntosRepository.INSTANCE = new AssuntosRepository();
        }
        return AssuntosRepository.INSTANCE;
    }
    create( assunto : ICreateUserDTO): Assunto {
        const assunto_created = new Assunto();
        Object.assign(assunto_created, {
            assunto,
            created_at: new Date(),
        });
        this.assuntos.push(assunto_created);
        return assunto_created;
    }

    list(): Assunto[] {
        return this.assuntos;
    }
}
export { AssuntosRepository }