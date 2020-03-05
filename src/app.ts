import * as express from 'express'
import * as createError from 'http-errors'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import HttpsMiddleware from '@middlewares/HttpsMiddleware'
import CorsMiddleware from '@middlewares/CorsMiddleware'
import ErrorResponseMiddleware from '@middlewares/ErrorResponseMiddleware'
import config from '@config'
import routes from '@routes';

// APP SETUP
const app = express()

// SECURITY CONFIG
app.set('trust proxy', 1)
app.use(CorsMiddleware)

// REQUEST CONFIG
app.set('json spaces', 2)
app.use(cookieParser())
app.use(bodyParser.json({ type: 'application/json', limit: config.REQ_PAYLOAD_LIMIT }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (config.APP_ENV === 'production') {
  app.use(HttpsMiddleware)
}

// ROUTES
app.use(routes.api())

// 404 ERROR HANDLER
app.use((req, res, next) => {
  next(createError(404))
})

// ERROR HANDLER
app.use(ErrorResponseMiddleware)

export default app
