import { Router } from 'express'
import SymptomEventController from '../../controller/symptomEventController'

export default () => {
  const router = Router()
  router.param('id', new SymptomEventController().params)
  router.get('/', new SymptomEventController().getAll)
  router.get('/:id', new SymptomEventController().getOne)
  router.post('/', new SymptomEventController().create)
  router.put('/', new SymptomEventController().update)
  router.delete('/', new SymptomEventController().delete)
  return router
}
