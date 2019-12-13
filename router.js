const express = require('express')

const endpoint_1 = require('./endpoint_1');
const subrouter = require('./subRouter');

const router = express.Router();

router.use('/', async (req, res, next) => {
  console.log('router.use(/) - we can await request validation here, then resolve or reject it');
  next();
});

router.get('/', (req, res) => {
  return res.json('hey');
});

router.use('/subroute', subrouter);

router.use('/endpoint_1', (req, res, next) => {
  console.log('I am routing endpoint 1');
  next();
});
router.get('/endpoint_1', endpoint_1);

router.get('/endpoint_2', (req, res) => {
  console.info('/endpoint_2');
  return res.json('hey 2');
});

module.exports = router;