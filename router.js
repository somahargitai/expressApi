import express from 'express';

import endpoint_1 from './routes/endpoint_1';
import endpoint_3_loglevels from './routes/endpoint_3_loglevels';
import { subRouter } from './routes/subRouter';

const router = express.Router();

router.use('/', async (req, res, next) => {
  console.log('router.use(/) - we can await request validation here, then resolve or reject it');
  next();
});

router.get('/', (req, res) => {
  console.log('health check')
  return res.json('health check okay');
});

router.get('/', (req, res) => {
  return res.json('hey');
});

router.use('/subroute', subRouter);

router.use('/endpoint_1', (req, res, next) => {
  console.log('I am routing endpoint 1');
  next();
});
router.get('/endpoint_1', endpoint_1);

router.get('/endpoint_2', (req, res) => {
  console.info('/endpoint_2');
  return res.json('hey 2');
});

router.get('/endpoint_3_loglevels', endpoint_3_loglevels);


export {
  router
};
