import { Request, Response } from "express";
import { ListAllAssuntosUseCase } from "./listAllAssuntosUseCase";

class ListAllAssuntosController {
    constructor(private listAllAssuntosUseCase: ListAllAssuntosUseCase) {}

    handle(request: Request, response: Response): Response {
        const all_assuntos = this.listAllAssuntosUseCase.execute();
        return response.json(all_assuntos);
    }
}
export { ListAllAssuntosController };