import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Pessoas - GetAll,', () => {
  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {
    const resCidade = await testServer
    .post('/pessoas')
    .send({ nome: 'Teste'});
  });

  it('Busca registros', async () => {

    const res1 = await testServer
     .post('/pessoas')
     .send({ 
      cidadeId,
      email: 'frankwillian@gmail.com.br',
      nomeCompleto: 'Frank Willian'
    });

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resBuscada = await testServer
      .get('/pessoas')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});