import { Router } from "express";
import  createUserController from "../modules/accounts/useCases/createUser"
import listUserController from "../modules/accounts/useCases/listUser"
const usersRoutes = Router();

usersRoutes.post("/", (request, response)=>
    createUserController().handle(request, response)
);
usersRoutes.get("/", (request, response) => 
    listUserController().handle(request, response)
);
export { usersRoutes }