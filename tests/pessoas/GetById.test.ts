import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { expect, test, beforeAll, afterAll } from '@jest/globals';

describe('Cidades - GetById,', () => {

  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {

  })
  
  it('Busca registro', async () => {
    const res1 = await testServer
     .post('/pessoas')
     .send({ 
      cidadeId,
      nomeCompleto: 'Frank Willian',
      email: 'frankwillian@gmail.com.br'
    });

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resBuscada = await testServer
      .get(`/pessoas/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nomeCompleto');

  });

  it('Tenta buscar registro que não existe', async () => {

    const res1 = await testServer
    .delete('/pessoas/999999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('error.default');
  });
});