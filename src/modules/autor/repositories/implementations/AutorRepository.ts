import { Autor } from "../../entities/Autor";
import { IAutorRepository, ICreateAutorDTO } from "../IAutorRepository";

class AutoresRepository implements IAutorRepository {
    private autores : Autor[];

    private static INSTANCE: AutoresRepository;

    private constructor() {
        this.autores = [];
    }

    public static getInstance(): AutoresRepository {
        if ( !AutoresRepository.INSTANCE) {
            AutoresRepository.INSTANCE = new AutoresRepository();
        }
        return AutoresRepository.INSTANCE;
    }

    create({ nome_autor }: ICreateAutorDTO): Autor {
        const autor_created = new Autor();
        Object.assign(autor_created, {
            nome_autor,
            created_at: new Date(),
            updated_at: new Date(),
        });
        this.autores.push(autor_created);
        return autor_created;
    }

    list(): Autor[] {
        return this.autores;
    }
}

export { AutoresRepository };