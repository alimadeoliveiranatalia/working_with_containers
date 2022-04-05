import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

export default(): ListUserController => {
    const userRepository = new UserRepository();

    const listUserUseCase = new ListUserUseCase(userRepository);

    const listUserController = new ListUserController(listUserUseCase);

    return listUserController;
}