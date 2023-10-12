import express from 'express';
import { config } from 'dotenv'
import cors from 'cors';
import { routes } from './routes';

config();
const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(routes);

export { app };