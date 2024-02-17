import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { PessoasProvider } from "../../database/providers/pessoas";
import { validation } from "../../shared/middlewares";
import { IPessoa } from "../../database/models/Pessoas";

interface IParamProps {
  id?: number;
};

interface IBodyProps extends Omit<IPessoa, 'id'>{}

export const updateByIdValidation = validation({
    params: yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
}),
    body: yup.object().shape({
      nome: yup.string().required().min(3),
}),
});

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

  if(Number(!req.params.id)) 
   return res.status(StatusCodes.BAD_REQUEST).json({
    errors: {
      default: 'O parâmetro id precisa ser informado'
   }
  });

  const result = await PessoasProvider.UpdateById(Number(req.params.id), req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};