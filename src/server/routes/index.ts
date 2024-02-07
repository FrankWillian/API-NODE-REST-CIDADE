import { Router } from 'express';

import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  
  return res.send(200);
});

router.post('/teste', (req, res) => {

  console.log(req.body);

  return res.status(StatusCodes.BAD_GATEWAY).json(req.body);


});
