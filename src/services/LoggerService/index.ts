import * as winston from 'winston';
const { format, transports } = winston
const { combine } = winston.format;
import config from '@config';

class LoggerService {
  protected logger: winston.Logger;
  protected stream: (options?: any) => NodeJS.ReadableStream;

  constructor() {
    const logger = winston.createLogger();
    
    if (config.APP_ENV == 'development' || config.APP_ENV == 'staging') {
      logger.add(new transports.Console({
        format: combine(
          format.colorize(),
          format.timestamp(),
          format.align(),
          format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
        ),
      }))
    }

    if (config.APP_ENV == 'staging' || config.APP_ENV == 'production') {
      logger.add(new transports.File({
        filename: `${config.ROOT}/../app.log`
      }))
    }


    logger.stream({
      write: (message: any) => {
        logger.info(message);
      }
    });

    this.logger = logger;
    this.stream = logger.stream;
    this.log = this.log.bind(this);
  }

  log(type: string, message: any, tags: any) {
    const { logger } = this;
    logger.log(type, message, tags);
  }

  info(message: any, tags: any) {
    const { logger } = this;
    logger.log('info', message, tags);
  }

  error(message: any, tags: any) {
    const { logger } = this;
    logger.log('error', message, tags);
  }

  debug(message: any, tags: any) {
    const { logger } = this;
    logger.log('debug', message, tags);
  }

  warning(message: any, tags: any) {
    const { logger } = this;
    logger.log('warning', message, tags);
  }
};

const instance = new LoggerService();

export default instance;
