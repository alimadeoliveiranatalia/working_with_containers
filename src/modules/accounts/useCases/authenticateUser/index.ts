import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserCase";
import { AuthenticateUserController } from "./AuthenticateUserController";

export default (): AuthenticateUserController => {
    const userRepository = new UserRepository();

    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);

    const authenticateController = new AuthenticateUserController(authenticateUserUseCase);

    return authenticateController;
}