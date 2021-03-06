import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}
class AuthenticateUserUseCase {
    constructor(private userRepository: IUsersRepository){}
    async execute({email, password}: IRequest) : Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new Error("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email or password incorrect!");
        }

        const token = sign({},"ee11cbb19052e40b07aac0ca060c23ee", {
            subject: user.id,
            expiresIn:"1d"
        });

        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email
            }
        }
        return tokenReturn;
    }
}
export { AuthenticateUserUseCase }