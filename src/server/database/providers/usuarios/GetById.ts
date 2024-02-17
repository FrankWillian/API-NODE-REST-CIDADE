import { Knex } from "../../knex";
import { IUsuario } from "../../models/Usuario";
import { ETableNames } from "../../seeds/ETableNames";

export const GetById = async (email: string): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('email', '=', email)
      .first();

    if (result) return result;

    return new Error('Registro não encontrado');
    
  } catch (error) {
    console.log(error);
    return new Error('Erro ao buscar registro');
  }
}
