import { Request, Response } from "express";
import { ListAllAutoresUseCase } from "./ListAllAutoresUseCase";

class ListAllAutoresController {
    constructor(private listAllAutoresUseCase: ListAllAutoresUseCase) {}
    handle(request: Request, response: Response): Response {
        const all_autores = this.listAllAutoresUseCase.execute();
        return response.json(all_autores);
    }
}
export { ListAllAutoresController }