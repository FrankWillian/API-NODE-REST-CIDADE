import { ETableNames } from "../../seeds/ETableNames";
import { IPessoa } from "../../models/Pessoas";
import { Knex } from "../../knex";

export const UpdateById = async (id: number, cidade: Omit<IPessoa, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .where('id', '=', id)

    //if (result > 0) return ;

    return new Error('Erro a atualizar o registo');
  } catch (error) {
    console.log(error);
    return new Error('Erro a atualizar o registo');
  }
};