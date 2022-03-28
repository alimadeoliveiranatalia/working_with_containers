import { Request, Response } from "express";
import { ListAutorUsecase } from "./ListAutorUseCase";

export class ListAutorController {
    constructor(private listAutorUseCase: ListAutorUsecase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const all_autor = await this.listAutorUseCase.execute();
        return response.json(all_autor);
    }
}