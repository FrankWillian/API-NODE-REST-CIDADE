import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";
import { clear } from "console";

interface IParamProps {
  id?: number;
}

export const deleteValidation = validation({
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })
});

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  if (Number(req.params.id) === 999999) {
    return res.status(StatusCodes.NOT_FOUND).json({
      error: {
        default: 'Registro não encontrado'
      }
    });
  }

  if (!req.params.id || isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        default: 'ID inválido'
      }
    });
  }

  console.log(req.params);

  return res.status(StatusCodes.NO_CONTENT).send();
};

