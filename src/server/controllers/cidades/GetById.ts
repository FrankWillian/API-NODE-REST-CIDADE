import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';
import { CidadesProvider } from "../../database/providers/cidades";
import { validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number;
};

export const getByIdValidation = validation({
    params: yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
})});

export const getById = async (req: Request<IParamProps>, res: Response) => {

  if(Number(!req.params.id)) 
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro id precisa ser informado.'
    }
  });

  const result = await CidadesProvider.GetById(Number(req.params.id))
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }
  return res.status(StatusCodes.OK).json(result);
};