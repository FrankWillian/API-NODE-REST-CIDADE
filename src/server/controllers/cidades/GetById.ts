import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number;
};

export const getByIdValidation = validation({
    params: yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
})});

export const getById = async (req: Request<IParamProps>, res: Response) => {

  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não Implementado!');
};