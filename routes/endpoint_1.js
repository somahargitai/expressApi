import { logger } from '../logger/winstonLogger';

const endpoint1 = (req, res) => {
  console.log('/endpoint_1');
      // logger.log('log'); - Cannot create property 'Symbol(level)' on string 'log'
      logger.silly('silly');    //  - no log, no nothing
      logger.debug('debug');    //  - no log, no nothing
      logger.verbose('verbose');//  - no log, no nothing
      logger.http('http');      //  - no log, no nothing
  logger.info('info');
  logger.warn('warn');
  logger.error('error');

  res.type('application/json');
  res.status(200);
  return res.json('test response endpoint 1');
};


module.exports = endpoint1;