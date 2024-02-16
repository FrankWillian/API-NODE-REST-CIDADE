import { Knex } from "../../knex";
import { IPessoa } from "../../models/Pessoas";
import { ETableNames } from "../../seeds/ETableNames";

export const create = async (pessoa: Omit<IPessoa, 'id'>): Promise<number> => {
  try {
    const [{ count }] = await Knex(ETableNames.cidade)
      .where('id', '=', pessoa.cidadeId)
      .count<[{ count: number}]>('* as count');

    if (count === 0) {
      throw new Error('A cidade usada no cadastro não foi encontrada');
    }
    
    const [result] = await Knex(ETableNames.pessoa).insert(pessoa).returning('id');
    if (typeof result === 'number') {
      return result;
    } else {
      throw new Error('Erro ao inserir pessoa');
    }
    
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao cadastrar o registro');
  }
};
