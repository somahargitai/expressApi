import express from 'express';

import { router } from './router';
import { logger } from './logger/winstonLogger';

const app = express();
const port = 5000;

app.use(router);

app.listen(port, () => {
  console.log(`connected on port ${port}`);
  logger.warn(`connected on port ${port}`);
});