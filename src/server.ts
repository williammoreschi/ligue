import 'reflect-metadata';
// eslint-disable-next-line import-helpers/order-imports
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import swaggerFile from '../swagger.json';
import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.status_code).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(9999, () => {
  console.log('Server is running!');
});
