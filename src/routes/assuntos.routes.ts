import { Router } from "express";
import  createAssuntoController  from "../modules/livro/useCases/createAssunto";
import  listAllAssuntosController  from "../modules/livro/useCases/listAssunto";

const assuntosRoutes = Router();

assuntosRoutes.post("/", (request, response) => 
    createAssuntoController().handle(request, response)
);

assuntosRoutes.get("/", (request, response) =>
    listAllAssuntosController().handle(request, response)
);

export { assuntosRoutes };