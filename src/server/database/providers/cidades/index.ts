import * as create from './Create';
import * as deleteById from './DeleteById';
import * as getById from './GetById';


export const CidadesProvider = {
  ...create, 
  ...deleteById,
  ...getById,
}