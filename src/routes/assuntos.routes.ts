import { request, response, Router } from "express";
import { createAssuntoController } from "../modules/assunto/useCases/createAssunto";

const assuntosRoutes = Router();

assuntosRoutes.post("/", (request, response) => 
    createAssuntoController.handle(request, response)
);

export { assuntosRoutes };