import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {
  it('Cria registro', async () =>{
    const res1 = await testServer 
      .post('/cidades')
      .send({ nome: 'Caxias do Sul'});

    expect('a').toEqual('a');

  });
});