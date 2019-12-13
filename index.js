const express = require('express');

const router = require('./router');

const app = express();
const port = 1987;

const resp = 'port';
/*
app.get('/', (req, res) => {
  return res.json(resp);
});
*/
app.use(router);

app.listen(port, () => {
  console.log(port);
});