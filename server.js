import express from 'express';

import router from './router';

const app = express();
const port = 1987;

const resp = 'port';

app.use(router);

app.listen(port, () => {
  console.log(port);
});