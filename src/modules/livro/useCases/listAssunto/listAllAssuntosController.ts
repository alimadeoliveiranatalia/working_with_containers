import { Request, Response } from "express";
import { ListAllAssuntosUseCase } from "./listAllAssuntosUseCase";

class ListAllAssuntosController {
    constructor(private listAllAssuntosUseCase: ListAllAssuntosUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const all_assuntos = await this.listAllAssuntosUseCase.execute();
        return response.json(all_assuntos);
    }
}
export { ListAllAssuntosController };