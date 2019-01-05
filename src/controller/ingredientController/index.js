import BaseController from '../baseController'
import IngredientService from '../../service/ingredientService'

export default class IngredientController extends BaseController {
  constructor () {
    super(new IngredientService())
  }
}
