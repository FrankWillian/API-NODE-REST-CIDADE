import { Router } from 'express';
import { CidadesController } from './../controllers';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  
  return res.send(200);
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };
