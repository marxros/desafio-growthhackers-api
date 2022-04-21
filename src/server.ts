import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';

import cors from 'cors';

import './database';
import './shared/container';

import { router } from './routes';

const app = express();
app.use(cors({}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));



app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});