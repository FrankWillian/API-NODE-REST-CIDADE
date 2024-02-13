import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface ICitadel {
  nome: string;
};

export const createValidation = validation({
    body: yup.object().shape({
    nome: yup.string().required().min(3)
})});

export const create = async (req: Request<{}, {}, ICitadel>, res: Response) => {

  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};