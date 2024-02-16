import { ETableNames } from "../../seeds/ETableNames";
import { ICidade } from "../../models";
import { Knex } from "../../knex";

export const UpdateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade)
      .update(cidade)
      .where('id', '=', id)

    if (result > 0) return ;

    return new Error('Erro a atualizar o registo');
  } catch (error) {
    console.log(error);
    return new Error('Erro a atualizar o registo');
  }
};