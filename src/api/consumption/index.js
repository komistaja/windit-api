import { Router } from 'express'
import ConsumptionEventController from '../../db/controller/consumptionEventController'
const router = Router()

export default () => {
  router.use('/', new ConsumptionEventController().route())
  return router
}
