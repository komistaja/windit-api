import { Router } from 'express'
import SymptomController from '../../db/controller/symptomController'
const router = Router()

export default () => {
  router.use('/', new SymptomController().route())
  return router
}
