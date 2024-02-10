import express from 'express';
import 'dotenv/config';
import { router } from './routes';
import './shared/services/Traducao';


const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

export default server;
