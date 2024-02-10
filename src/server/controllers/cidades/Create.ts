import { Request, Response } from "express";
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

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {

  let validateData: ICidades | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, { abortEarly: false });
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

  console.log(req.body.nome);

  return res.send('Create!');
};