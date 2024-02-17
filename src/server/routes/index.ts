import { Router } from 'express';
import { CidadesController, PessoasController } from './../controllers';
import { StatusCodes } from 'http-status-codes';
import { UsuariosController } from '../controllers/usuarios';

const router = Router();

router.get('/', (req, res) => {
  
  return res.send(200);
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteValidation, CidadesController.deleteById);

router.get('/pessoas', PessoasController.getAllValidation, PessoasController.getAll);
router.get('/pessoas/:id', PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', PessoasController.updateByIdValidation, PessoasController.updateById);
router.post('/pessoas', PessoasController.createValidation, PessoasController.create);
router.delete('/pessoas/:id', PessoasController.deleteValidation, PessoasController.deleteById);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);

export { router };
