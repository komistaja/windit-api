import { Router } from 'express'
import SymptomEventController from '../../db/controller/symptomEventController'
const router = Router()

export default () => {
  router.use('/', new SymptomEventController().route())
  return router
}
