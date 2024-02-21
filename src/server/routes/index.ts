import { Router } from 'express';
import { CidadesController, PessoasController } from './../controllers';
import { UsuariosController } from '../controllers/usuarios';
import { ensureAuthenticated } from '../shared/middlewares';

const router = Router();

router.get('/', (req, res) => {
  
  return res.send(200);
});

router.get('/cidades', ensureAuthenticated,  CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', ensureAuthenticated,CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', ensureAuthenticated,CidadesController.updateByIdValidation, CidadesController.updateById);
router.post('/cidades', ensureAuthenticated,CidadesController.createValidation, CidadesController.create);
router.delete('/cidades/:id',ensureAuthenticated, CidadesController.deleteValidation, CidadesController.deleteById);

router.get('/pessoas',ensureAuthenticated, PessoasController.getAllValidation, PessoasController.getAll);
router.get('/pessoas/:id', ensureAuthenticated,PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated,PessoasController.updateByIdValidation, PessoasController.updateById);
router.post('/pessoas', ensureAuthenticated,PessoasController.createValidation, PessoasController.create);
router.delete('/pessoas/:id', ensureAuthenticated,PessoasController.deleteValidation, PessoasController.deleteById);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);

export { router };
