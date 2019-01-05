import BaseController from '../baseController'
import SymptomService from '../../service/symptomService'

export default class SymptomController extends BaseController {
  constructor () {
    super(new SymptomService())
  }
}
