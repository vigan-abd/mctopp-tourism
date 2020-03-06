import { Request, Response, NextFunction } from 'express'
import logger from '@services/LoggerService'
import * as HTTP_STATUS from 'http-status-codes'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let message = 'Server error.'
  let status = HTTP_STATUS.INTERNAL_SERVER_ERROR

  if (err.name === 'ValidationError') {
    status = HTTP_STATUS.UNPROCESSABLE_ENTITY
    if (err.errors && Object.keys(err.errors).length > 0) {
      const k = Object.keys(err.errors)[0]
      const o = err.errors[k]
      message = o.message
    }
  } else if (err.name === 'SimpleMessage') {
    message = err.message
    status = err.status
  } else if (err.name === 'AuthenticationError') {
    status = HTTP_STATUS.UNAUTHORIZED
    message = 'Authentication error!'
  } else if (err.name === 'UserDefined') {
    if (err.message) message = err.message
  }

  if (err.statusCode) status = err.statusCode

  logger.log('error', err, { tags: 'server' })
  res.statusCode = status

  return res.json({ message })
}

export default handler
