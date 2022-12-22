import express from 'express';
import { router } from './routes';
import 'dotenv/config';
import cors from 'cors';
const server = express();

server.use(cors());
server.use(express.json());
server.use(router);



export { server };