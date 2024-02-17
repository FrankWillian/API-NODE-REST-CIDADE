import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidades - UpdateById,', () => {
  
  it('Atualiza registro', async () => {

    const res1 = await testServer
     .post('/cidades')
     .send({ nome: 'Caxias do sul'});

     expect(res1.statusCode).toEqual(StatusCodes.CREATED);

     const resAtualizada = await testServer
      .get(`/cidades/${res1.body}`)
      .send();

    expect(resAtualizada.statusCode).toEqual(StatusCodes.OK);

  });


  it('Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
    .delete('/cidades/999999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res1.body).toHaveProperty('error.default');
  });
});