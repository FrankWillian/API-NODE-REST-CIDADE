import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Pessoas - DeleteById,', () => {

  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send( { nome: 'Teste' });

    cidadeId = resCidade.body;
  })
  
  it('Apaga registro', async () => {
    const res1 = await testServer
     .post('/pessoas')
     .send({
      cidadeId,
      email: 'frankwillian@gmail.com',
      nomeCompleto: 'Frank Willian',
    });

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resApagada = await testServer
      .delete(`/pessoas/${res1.body}`)
      .send({});

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);

  });
  it('Tenta apaga registro que não existe', async () => {
    const res1 = await testServer
    .delete('/pessoas/999999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res1.body).toHaveProperty('error.default');
  });
});