import BaseController from '../baseController'
import SymptomEventService from '../../service/symptomEventService'

export default class SymptomEventController extends BaseController {
  constructor () {
    super(new SymptomEventService())
  }
}
