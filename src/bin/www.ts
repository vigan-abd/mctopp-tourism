/* eslint-disable */
require('module-alias/register')
import app from '../app'
import config from '@config'
/* eslint-enable */

/**
 * Get port from environment and store in Express.
 */
app.set('port', config.PORT)

app.listen(config.PORT, config.HOST, (err: any) => {
  if (err) {
    console.error('error', err, { tags: 'cron' })
  }
  console.log('info', `[STARTUP] Server listening on ${config.HOST}:${config.PORT}`, { tags: 'startup,network' })
})
