import { Router } from "express";
import createAutorController from "../modules/livro/useCases/createAutor";

const autorRoutes = Router();

autorRoutes.post("/", (request, response) =>
createAutorController().handle(request, response)

);

export { autorRoutes };