import { Request, Response } from "express";

interface ICidades {
  nome: string;
}

export const create = (req: Request<{}, {}, ICidades>, res: Response) => {

  console.log(req.body.nome);

  return res.send('Create!');
};