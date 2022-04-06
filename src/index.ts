import "reflect-metadata";
import express from "express";
import { assuntosRoutes } from "./routes/assuntos.routes";
import { autorRoutes } from "./routes/autores.routes";
import "./database";
import { editoraRoutes } from "./routes/editoras.routes";
import { livrosRoutes } from "./routes/livros.routes";
import { usersRoutes } from "./routes/users.routes";
import { authenticateRoutes } from "./routes/authenticate.routes";


const app = express();

app.use(express.json());

app.use("/assuntos", assuntosRoutes );

app.use("/autores", autorRoutes );

app.use("/editoras", editoraRoutes);

app.use("/livros", livrosRoutes);

app.use("/users", usersRoutes);

app.use(authenticateRoutes);

export { app };