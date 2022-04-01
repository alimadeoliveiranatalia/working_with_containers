import { Cliente } from "../entities/Cliente"

interface ICreateClienteDTO {
    name: string
}
interface IClienteRepository {
    create({name}: ICreateClienteDTO): Promise<Cliente>;
    findByCliente(name: string): Promise<Cliente>;
    list() : Promise<Cliente[]>
}