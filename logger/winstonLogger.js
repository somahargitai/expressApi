import { createLogger, format, transports,} from 'winston';
import moment from 'moment';
const { combine, colorize, timestamp, label, printf, simple } = format;

const logCongfigConsole = {
  format: combine(
    colorize(),
    timestamp(),
    label({ label: 'right meow' }),
    printf(
      info => `[${
        moment(info.timestamp)
          .format('HH:mm:ss-SSS')
        }]   [${
          info.level
        }] \t[${
          info.label
        }]: ${
          info.message
        }`
    ),
  ),
  level: 'silly',
  defaultMeta: { service: 'user-service' },
};

const logConfigFile = {
  format: combine(
    timestamp(),
    label({ label: 'left meow' }),
    printf(info => `[${
        info.timestamp
      }] [${
        info.level
      }] [${
        info.label
      }]: ${
        info.message
      }`),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({
      filename: 'log/error.log',
      level: 'warn'
    }),
    new transports.File({
      filename: 'log/combined.log',
      level: 'silly'
    }),
  ]
};

export const logger = createLogger(logConfigFile);

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console(
    logCongfigConsole
  ));
}
