import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { UsuarioProvider } from "../../database/providers/usuarios";
import { validation } from "../../shared/middlewares";
import { IUsuario } from "../../database/models";

interface IBodyProps extends IUsuario {};

export const signUpValidation = validation({
    body: yup.object().shape({
    nome: yup.string().required().min(3).max(150),
    email: yup.string().required().min(3).max(15),
    senha: yup.string().required().email().min(150)
})});

export const signUp = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  const result = await UsuarioProvider.create(req.body);

  if (result === null || result === undefined) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Erro ao criar usuario'
      }
    });
  }

  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(result);
};
