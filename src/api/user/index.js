import consumption from './consumption'
import symptom from './symptom'
import { Router } from 'express'
import UserController from '../../db/controller/userController'
const router = Router()
require('dotenv').config()

export default () => {
  router.use('/', new UserController().route())
  router.use('/:id/consumptions', consumption())
  router.use('/:id/symptoms', symptom())
  return router
}
