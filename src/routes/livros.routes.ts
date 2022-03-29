import { Router } from "express";
import createLivroController from "../modules/livro/useCases/createLivro";
import listLivroController from "../modules/livro/useCases/listLivro";

export const livrosRoutes = Router();

livrosRoutes.post("/", (request, response) =>
    createLivroController().handle(request, response)
);

livrosRoutes.get("/", (request, response) =>
    listLivroController().handle(request, response)
);