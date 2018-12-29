import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const router = Router()

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.2',
    info: {
      title: 'Windit api',
      version: '0.0.1',
      description: 'Windit gas management system'
    },
    servers: [
      {
        url: '/api'
      }
    ],
    components: {
    }
  },
  apis: [
    'src/api/**/index.js'
  ]
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export default () => {
  router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  return router
}
