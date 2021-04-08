import dotenv from 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import '../typeorm';
import AppError from '../errors/AppError';
import { errors } from 'celebrate';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log('server running on port 3000! '),
);
