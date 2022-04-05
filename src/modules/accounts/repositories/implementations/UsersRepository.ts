import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create(data: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name : data.name,
            email : data.email,
            password: data.password,
            created_at: new Date()
        });
        await this.repository.save(user);
        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const findEmail = await this.repository.findOne({email});
        return findEmail!;
    }
    async findById(id: string): Promise<User> {
        const findId = await this.repository.findOne(id);
        return findId!;
    }
    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}
export { UserRepository }