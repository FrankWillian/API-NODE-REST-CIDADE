import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { UsuarioProvider } from "../../database/providers/usuarios";
import { validation } from "../../shared/middlewares";
import { IUsuario } from "../../database/models";
import { PasswordCrypto } from "../../shared/services";

interface IBodyProps extends Omit<IUsuario, 'id' | 'nome' > { }

export const signInValidation = validation({
    body: yup.object().shape({
    email: yup.string().required().min(3).max(15),
    senha: yup.string().required().email().min(150)
})});

export const signIn = async (req: Request<{ email: string }, {}, IBodyProps>, res: Response) => {
  const { email, senha } = req.body;

  const result = await UsuarioProvider.GetByEmail(email);

  if (result instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Email ou senha são inválidos'
      }
    });
  }

  const passwordMatch = await PasswordCrypto.verifyPassword(senha, result.senha);

  if (passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Email ou senha são inválidos'
      }
    });
  } else {
    return res.status(StatusCodes.OK).json({acessToken : 'teste.teste.teste'});
  }
};