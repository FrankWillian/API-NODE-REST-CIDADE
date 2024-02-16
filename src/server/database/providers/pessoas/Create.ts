import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { ETableNames } from "../../seeds/ETableNames";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number> => {
  try {
    const [id] = await Knex(ETableNames.cidade).insert(cidade).returning('id');

    if (id != null) {
      return Number(id);
    } else {
      throw new Error('Erro ao inserir cidade. ID não retornado.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao cadastrar o registro');
  }
};