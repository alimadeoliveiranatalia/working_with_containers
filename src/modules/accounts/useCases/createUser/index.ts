import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default (): CreateUserController => {
    const userRepository = new UserRepository();

    const createUserUseCase = new CreateUserUseCase(userRepository);

    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
}