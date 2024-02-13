import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { error } from "console";

interface IParamProps {
  id?: number;
};

export const deleteValidation = validation({
    params: yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
})});

export const deleteById = async (req: Request<IParamProps>, res: Response) => {

  if(Number(req.params.id) === 999999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: {
      default: 'Registro não encontrado'
    }
  });

  console.log(req.params);

  return res.status(StatusCodes.NO_CONTENT).send();
};