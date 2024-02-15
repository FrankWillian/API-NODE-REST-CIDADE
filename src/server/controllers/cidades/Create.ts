import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { CidadesProvider } from "../../database/providers/cidades";
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";

interface IBodyProps extends ICidade {};

export const createValidation = validation({
    body: yup.object().shape({
    nome: yup.string().required().min(3).max(150)
})});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  const result = await CidadesProvider.create(req.body);

  if (result === null || result === undefined) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Erro ao criar cidade'
      }
    });
  }

  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(result);
};
