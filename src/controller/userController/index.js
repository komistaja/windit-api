import BaseController from '../baseController'
import UserService from '../../service/userService'

class UserController extends BaseController {
  constructor () {
    super(new UserService('user'))

    this.getUserConsumption = (req, res) => {
      new UserService().getUserConsumption(req, res)
    }

    this.getUserSymptoms = (req, res) => {
      new UserService().getUserSymptoms(req, res)
    }
  }
}


export default UserController
