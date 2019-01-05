import BaseController from '../baseController'
import ConsumptionEventService from '../../service/consumptionEventService'

export default class ConsumptionEventController extends BaseController {
  constructor () {
    super(new ConsumptionEventService('consumption_event'))
  }
}
