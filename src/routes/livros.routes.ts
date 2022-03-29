import { Router } from "express";
import createLivroController from "../modules/livro/useCases/createLivro";

export const livrosRoutes = Router();

livrosRoutes.post("/", (request, response) =>
    createLivroController().handle(request, response)
);