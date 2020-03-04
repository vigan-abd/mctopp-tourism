import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let message = 'Server error.'
  let status = 500

  if (err.name === 'ValidationError') {
    status = 422
    if (err.errors && Object.keys(err.errors).length > 0) {
      const k = Object.keys(err.errors)[0]
      const o = err.errors[k]
      message = o.message
    }
  } else if (err.name === 'SimpleMessage') {
    message = err.message
    status = err.status
  } else if (err.name === 'AuthenticationError') {
    status = 401
    message = 'Authentication error!'
  } else if (err.name === 'UserDefined') {
    if (err.message) message = err.message
  }

  if (err.statusCode) status = err.statusCode
  res.statusCode = status

  return res.json({ message })
}

export default handler
