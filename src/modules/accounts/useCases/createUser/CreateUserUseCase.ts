import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ){}
    async execute(data:ICreateUserDTO): Promise<User>{
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(userAlreadyExists){
            throw new Error("User already exists");
        }
        const passwordHash = await hash(data.password,8);
        const user = await this.userRepository.create({
            name: data.name,
            email: data.email,
            password: passwordHash,
        });
        return user;

    }
}
export { CreateUserUseCase }