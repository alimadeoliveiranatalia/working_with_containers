import "reflect-metadata";
import express from "express";
import { assuntosRoutes } from "./routes/assuntos.routes";
import { autoresRoutes } from "./routes/autores.routes";
import "./database";


const app = express();

app.use(express.json());

app.use("/assuntos", assuntosRoutes );

app.use("/autores", autoresRoutes );

export { app };