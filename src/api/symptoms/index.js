import { Router } from 'express'
import SymptomController from '../../controller/symptomController'

export default () => {
  const router = Router()
  router.param('id', new SymptomController().params)

  router.get('/', new SymptomController().getAll)
  router.get('/:id', new SymptomController().getOne)
  router.post('/', new SymptomController().create)
  router.put('/', new SymptomController().update)
  router.delete('/', new SymptomController().delete)
  return router
}
