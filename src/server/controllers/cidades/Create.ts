import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { abort } from "process";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";

interface IBodyProps extends ICidade {};

export const createValidation = validation({
    body: yup.object().shape({
    nome: yup.string().required().min(3)
})});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  console.log(req.body);

  

  return res.status(StatusCodes.CREATED).json(1);
};