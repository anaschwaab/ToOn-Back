import { Router } from "express";
import { startRouter } from "./start.routes";

const routes = Router();

routes.use('/api/start', startRouter);

export { routes };