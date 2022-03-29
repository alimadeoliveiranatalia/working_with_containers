import { Router } from "express";
import  createEditoraController  from "../modules/livro/useCases/createEditora";
import listEditoraController from "../modules/livro/useCases/listEditora";
export const editoraRoutes = Router();

editoraRoutes.post("/", (request, response)=>
    createEditoraController().handle(request, response)
);
editoraRoutes.get("/", (request, response) => {
    listEditoraController().handle(request, response)
})