import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { PessoasProvider } from "../../database/providers/pessoas";
import { validation } from "../../shared/middlewares";
import { IPessoa } from "../../database/models/Pessoas";

interface IBodyProps extends IPessoa {};

export const createValidation = validation({
    body: yup.object().shape({
    nome: yup.string().required().min(3).max(150)
})});

export const create = async (req: Request<{}, {}, IPessoa>, res: Response) => {
  const result = await PessoasProvider.create(req.body);

  if (result === null || result === undefined) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Erro ao criar Pessoa'
      }
    });
  }

  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(result);
};
