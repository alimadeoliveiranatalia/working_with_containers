import express from "express";
import { assuntosRoutes } from "./routes/assuntos.routes";

const app = express();

app.use(express.json());

app.use("/assuntos", assuntosRoutes);

export { app };