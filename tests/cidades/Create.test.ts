import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

  let acessToken = '';

  beforeAll(async () => {
    const email = 'create-cidade@gmail.com';
    await testServer.post('/cadastrar').send({ nome: 'Teste', email, senha: '123456'});
    const signInRes = await testServer.post('/entrar').send({ email, senha: '123456'});

    acessToken = signInRes.body.acessToken;
  });

  it('Cria registro', async () =>{
    const res1 = await testServer 
      .post('/cidades')
      .set({Authorization: `Bearer ${acessToken}`})
      .send({ nome: 'Caxias do Sul'});
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar registro com nome muito curto', async () =>{
    const res1 = await testServer 
      .post('/cidades')
      .set({Authorization: `Bearer ${acessToken}`})
      .send({ nome: 'Ca'});
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('error.body.nome');
  });
});