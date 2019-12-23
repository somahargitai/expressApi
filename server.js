import express from 'express';
import {
  morganLogToConsole,
  morganLogThroughWinston,
} from './logger/morganRouter';

import { router } from './router';
import { logger } from './logger/winstonLogger';

const app = express();
const port = 5000;

app.use(morganLogToConsole);
app.use(morganLogThroughWinston);

// init express router
app.use(router);

app.listen(port, () => {
  logger.info(`connected on port ${port}`);
});