import { ETableNames } from "../../seeds/ETableNames";
import { IPessoa } from "../../models";
import { Knex } from "../../knex";

export const GetAll = async (page: number, limit: number, filter: string, id: number): Promise<IPessoa[] | Error> => {
  try {
    let query = Knex(ETableNames.pessoa)
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
