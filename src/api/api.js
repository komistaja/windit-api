import bodyParser from 'body-parser'
import { httpLogger } from './logger'

import apidocs from './apidocs'
import Router from 'express'
import user from './user'
import ingredients from './ingredients'
import consumptionevent from './consumptionevent'
import symptoms from './symptoms'
import symptomevent from './symptomevent'

require('dotenv').config()

const router = Router()

export default () => {
  router.use(bodyParser.json())

  router.use(httpLogger)

  router.get('/', (req, res) => {
    res.status(200).json('berus')
  })

  router.use('/apidocs', apidocs())
  router.use('/user', user())
  router.use('/consumptionevent', consumptionevent())
  router.use('/symptomevent', symptomevent())
  router.use('/ingredient', ingredients())
  router.use('/symptoms', symptoms())

  return router
}
