import { Request, Response } from "express";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

class CreateAssuntoController {
    constructor(private createAssuntoUseCase: CreateAssuntoUseCase) {}

    handle(request: Request, response: Response) : Response {
        const  { assunto }  = request.body;        
        const assunto_created = this.createAssuntoUseCase.execute( { assunto });
        return response.status(201).json(assunto_created);
        
    }
}
export { CreateAssuntoController };