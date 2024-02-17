import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { PessoasProvider } from "../../database/providers/pessoas";
import { validation } from "../../shared/middlewares";
interface IQueryProps {
  id?: number;
  page?: number;
  limit?: number;
  filter?: string;
}

// Validação de entrada
export const getAllValidation = validation({
  query: yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
  }),
});

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  try {

    const result = await PessoasProvider.GetAll(req.query.page || 1, req.query.limit || 7, req.query.filter || '');
    const count = await PessoasProvider.count(req.query.filter);

    if (result instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: result.message } });
    } else if (count instanceof Error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: { default: count.message } });
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    return res.status(StatusCodes.OK).json(result);
  } catch (error) {

    console.error('Erro ao processar a solicitação:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro interno do servidor' } });
  }
};
