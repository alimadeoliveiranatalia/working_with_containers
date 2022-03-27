import { getRepository, Repository } from "typeorm";
import { Autor } from "../../entities/Autor";
import { IAutorRepository, ICreateAutorDTO } from "../IAutorRepository";

class AutorRepository implements IAutorRepository {
    private repository : Repository<Autor>;

    constructor(){
        this.repository = getRepository(Autor);
    }

    async create({name } : ICreateAutorDTO): Promise<Autor> {
        const autor_created = this.repository.create({
            name,
            created_at: new Date(),
            updated_at: new Date()
        });
        await this.repository.save(autor_created);
        return autor_created;
    }
    
   async findByAutor(name: string): Promise<Autor> {
        const find_autores = await this.repository.findOne({name});
        return find_autores!;   
   }
   async list(): Promise<Autor[]> {
       const all_autores = await this.repository.find();
       return all_autores;
   }
}
export { AutorRepository }