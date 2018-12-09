import { Router } from 'express'
import IngredientController from '../../db/controller/ingredientController'
const router = Router()

export default () => {
  router.use('/', new IngredientController().route())
  return router
}
