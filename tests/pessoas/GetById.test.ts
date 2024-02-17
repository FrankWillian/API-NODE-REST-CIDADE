import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { expect, test, beforeAll, afterAll } from '@jest/globals';

describe('Cidades - GetById,', () => {
  
  it('Busca registro', async () => {

    const res1 = await testServer
     .post('/cidades')
     .send({ nome: 'Caxias do sul'});

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resBuscada = await testServer
      .get(`/cidades/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');

  });


  it('Tenta buscar registro que não existe', async () => {

    const res1 = await testServer
    .delete('/cidades/999999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res1.body).toHaveProperty('error.default');
  });
});