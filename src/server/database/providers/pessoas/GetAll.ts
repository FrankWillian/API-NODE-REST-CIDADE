import { ETableNames } from "../../seeds/ETableNames";
import { IPessoa } from "../../models/Pessoas";
import { Knex } from "../../knex";

export const GetAll = async (page: number, limit: number, filter: string): Promise<IPessoa[] | Error> => {
  try {
    let query = Knex(ETableNames.pessoa)
      .select('*')
      .offset((page - 1) * limit)
      .limit(limit);

    const result = await query;

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar registro');
  }
}
