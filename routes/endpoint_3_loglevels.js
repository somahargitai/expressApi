import { logger } from '../logger/winstonLogger';

const endpoint3 = (req, res) => {
  console.info('/endpoint_3_loglevels');
  console.log(
    '\x1b[36m%s\x1b[0m',
    '- Log Levels with Winston.js -'
  );
  logger.silly('silly');
  logger.debug('debug');
  logger.verbose('verbose');
  logger.http('http');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');

  res.type('application/json');
  res.status(200);
  return res.json('Log Levels - Check out logs in node console and in the log folder');
};


module.exports = endpoint3;