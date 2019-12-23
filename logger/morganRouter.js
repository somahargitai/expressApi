import morgan from 'morgan';
import { logger } from './winstonLogger';

// catch all HTTP requests and responses and log the transaction
const morganLogToConsole = morgan('dev');

// catch them and pipe them to Winston logger
const morganLogThroughWinston = morgan(
  'combined', // or combined, default, tiny
  {
    stream: {
      write: (text) => {
        logger.http(text);
      }
    }
  }
);

export {
  morganLogToConsole,
  morganLogThroughWinston,
};
