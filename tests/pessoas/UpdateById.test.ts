import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Pessoas - UpdateById,', () => {

  let cidadeId: number | undefined = undefined;

  beforeAll(async () => {

  })
  
  it('Atualiza registro', async () => {

    const res1 = await testServer
     .post('/pessoas')
     .send({ 
      cidadeId,
      nomeCompleto: 'Frank Willian',
      email: 'frankwillian@gmail.com.br'
    });

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resAtualizada = await testServer
      .put(`/pessoas/${res1.body}`)
      .send({ 
        cidadeId,
        nomeCompleto: 'Frank Willian',
        email: 'frankwillian@gmail.com.br'
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });


  it('Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
    .put('/pessoa/999999')
    .send(
    );

    expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res1.body).toHaveProperty('error.default');
  });
});