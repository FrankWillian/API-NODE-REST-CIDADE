import { Router } from 'express';
import { CidadesController } from './../controllers';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  
  return res.send(200);
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.delete('/cidades/:id', CidadesController.deleteValidation, CidadesController.deleteById);

export { router };
