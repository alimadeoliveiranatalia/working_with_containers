import { Request, Response } from "express";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

class CreateAssuntoController {
    constructor(private createAssuntoUseCase: CreateAssuntoUseCase) {}

    async handle(request: Request, response: Response) : Promise<Response> {
        const  { assunto }  = request.body;        
        try {
            const assunto_created = await this.createAssuntoUseCase.execute( { assunto });
            return response.status(201).json(assunto_created);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
        
    }
}
export { CreateAssuntoController };