import express from 'express';

const subRouter = express.Router();

subRouter.get('/endpoint_4', (req, res) => {
  console.info('/subRoute/endpoint_4');
  return res.json('hey 4');
});

export {
  subRouter
};
