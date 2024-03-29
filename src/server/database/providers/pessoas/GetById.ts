import { ETableNames } from "../../seeds/ETableNames";
import { IPessoa } from "../../models/Pessoas";
import { Knex } from "../../knex";

export const GetById = async (id: number): Promise<IPessoa | Error> => {
  try {
    const result = await Knex(ETableNames.pessoa)
      .select('*')
      .where('id', '=', id)
      .first();

    if (result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}