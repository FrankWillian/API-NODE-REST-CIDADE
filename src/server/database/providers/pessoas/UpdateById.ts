import { ETableNames } from "../../seeds/ETableNames";
import { IPessoa } from "../../models/Pessoas";
import { Knex } from "../../knex";

export const UpdateById = async (id: number, pessoa: Omit<IPessoa, 'id'>): Promise<void | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.pessoa)
      .where('id', '=', id)
      .count<[{ count: number}]>('* as count');

    if (count === 0) {
      return new Error('A cidade usada no cadastro não foi encontrada'); 
    }

    const result = await Knex(ETableNames.pessoa)
      .update(pessoa)
      .where('id', '=', id)

    if (result > 0) return;

    return new Error('Erro a atualizar o registo');
    
  } catch (error) {
    console.log(error);
    return new Error('Erro a atualizar o registo');
  }
};