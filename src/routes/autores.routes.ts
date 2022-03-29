import { Router } from "express";
import createAutorController from "../modules/livro/useCases/createAutor";
import listAutorController from "../modules/livro/useCases/listAutor";
const autorRoutes = Router();

autorRoutes.post("/", (request, response) =>
createAutorController().handle(request, response)
);

autorRoutes.get("/", (request, response) => {
    listAutorController().handle(request, response)
});
export { autorRoutes };