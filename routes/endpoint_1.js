import { logger } from '../logger/winstonLogger';

const endpoint1 = (req, res) => {
  console.log('/endpoint_1');
  console.log('Log Levels with Winston.js:');
  logger.silly('silly');
  logger.debug('debug');
  logger.verbose('verbose');
  logger.http('http');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');

  res.type('application/json');
  res.status(200);
  return res.json('test response endpoint 1');
};


module.exports = endpoint1;