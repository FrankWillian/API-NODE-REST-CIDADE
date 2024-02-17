import { cidadesBrasil } from './0000_insert_cidades'
import { Knex } from 'knex';

export enum ETableNames {
  cidade = 'cidade',
  pessoa = 'pessoa',
  usuario = 'usuario',
}

export const seed = async (knex: Knex): Promise<void> => {
  await knex(ETableNames.cidade).del(); 
  await knex(ETableNames.cidade).insert(cidadesBrasil.map(nome => ({ nome })));
};

