import { Knex } from "../../knex";
import { IUsuario } from "../../models/Usuario";
import { ETableNames } from "../../seeds/ETableNames";

export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number> => {
  try {
    const [ result ] = await Knex(ETableNames.usuario).insert(usuario).returning('id');

    if ( typeof result === 'object') {
      return result.id;
    } else if ( typeof result === 'object') {
      return result;
    }
    
    throw new Error('Erro ao cadastrar o registro');

  } catch (error) {
    console.error(error);
    throw new Error('Erro ao cadastrar o registro');
  }
};
