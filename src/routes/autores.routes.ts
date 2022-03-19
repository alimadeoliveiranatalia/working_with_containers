import { Router } from "express";
import { createAutorController } from "../modules/autor/useCases/createAutor";
import { listAllAutoresController } from "../modules/autor/useCases/listAutor";

const autoresRoutes = Router();

autoresRoutes.post("/", (request, response) => {
    createAutorController.handle(request, response)
});

autoresRoutes.get("/", (request, response) => {
    listAllAutoresController.handle(request, response)
});

export { autoresRoutes };