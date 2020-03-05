/* eslint-disable */
require('module-alias/register')
import app from '../app'
import config from '@config'
import logger from '@services/LoggerService'
/* eslint-enable */

/**
 * Get port from environment and store in Express.
 */
app.set('port', config.PORT)

app.listen(config.PORT, config.HOST, (err: any) => {
  if (err) {
    logger.error(err, { tags: 'cron' })
  }
  logger.info(`[STARTUP] Server listening on ${config.HOST}:${config.PORT}`, { tags: 'startup,network' })
})
