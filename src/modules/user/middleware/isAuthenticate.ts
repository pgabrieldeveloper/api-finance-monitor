import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../../../shared/errors/AppError';
import jwt from '../../../config';

interface ITokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

const isAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }
  const token = authHeader.split(' ')[1];
  try {
    const tokenVerify = verify(token, jwt.secret);
    const { sub } = tokenVerify as ITokenPayLoad;
    req.user = { id: sub };
    return next();
  } catch (error) {
    throw new AppError('JWT Token invalid');
  }
};

export default isAuthenticate;
