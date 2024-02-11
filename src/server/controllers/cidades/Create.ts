import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';

interface ICidades {
  nome: string;
}

const bodyValidation: yup.Schema<ICidades> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {

  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const ValidationErrors: Record<string, string> = {};

    yupError.inner.forEach(error => {
        if(!error.path) return;
        ValidationErrors[error.path] = error.message
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: ValidationErrors,
      }
    })
  }
};

interface IFilter {
  filter?: string;
}

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});

export const createQueryValidator: RequestHandler = async (req, res, next) => {

  try {
    await queryValidation.validate(req.query, { abortEarly: false });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const ValidationErrors: Record<string, string> = {};

    yupError.inner.forEach(error => {
        if(!error.path) return;
        ValidationErrors[error.path] = error.message
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: ValidationErrors,
      }
    })
  }
};

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {

  console.log(req.body);

  return res.send('Create!');
};