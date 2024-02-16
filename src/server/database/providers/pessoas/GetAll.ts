import { ETableNames } from "../../seeds/ETableNames";
import { ICidade } from "../../models";
import { Knex } from "../../knex";

export const GetAll = async (page: number, limit: number, filter: string, id: number): Promise<ICidade[] | Error> => {
  try {
    let query = Knex(ETableNames.cidade)
      .select('*')
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0) {
      query = query.where('id', '=', id);
    } else if (filter) {
      query = query.where('nome', 'like', `%${filter}%`);
    }

    const result = await query;

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar registro');
  }
}
