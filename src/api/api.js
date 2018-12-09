import bodyParser from 'body-parser'
import { httpLogger } from './logger'

import Router from 'express'
import user from './user'
import ingredients from './ingredients'
import consumption from './consumption'
import symptoms from './symptoms'
import symptom from './symptom'

require('dotenv').config()

const router = Router()

export default () => {
  router.use(bodyParser.json())

  router.use(httpLogger)

  router.get('/', (req, res) => {
    res.status(404).json('berus')
  })

  router.use('/user', user())
  router.use('/consumption', consumption())
  router.use('/symptom', symptom())
  router.use('/ingredients', ingredients())
  router.use('/symptoms', symptoms())

  return router
}
