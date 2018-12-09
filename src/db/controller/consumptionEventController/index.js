import BaseController from '../baseController'

export default class ConsumptionEventController extends BaseController {
  constructor () {
    const table = 'consumption_event'
    super(table)
  }
}
