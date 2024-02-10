import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICidades {
  nome: string;
}

const bodyValidation: yup.Schema<ICidades> = yup.object().shape({
    nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {

  let validateData: ICidades | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      }
    })
  }


  console.log(req.body.nome);

  return res.send('Create!');
};