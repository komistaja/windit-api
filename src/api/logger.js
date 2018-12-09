import winston from 'winston'
import expressWinston from 'express-winston'

const env = process.env.NODE_ENV || 'development'

const tsFormat = () => (new Date()).toLocaleTimeString()

const logger = winston.createLogger({
  level: env === 'production' ? 'info' : 'debug',
  transports: [
    new (winston.transports.Console)({
      silent: env === 'test',
      colorize: true,
      timestamp: tsFormat
    })
  ]
})

export default logger

export const httpLogger = expressWinston.logger({
  winstonInstance: logger,
  statusLevels: true
})
