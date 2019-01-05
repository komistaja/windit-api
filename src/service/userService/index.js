import CrudService from '../crudService'

export default class UserService extends CrudService {
  constructor () {
    super('user')
  }

  // TODO add errorhandling and responses
  async getUserConsumption (req, res) {
    const data = await this.db.select('*').from('consumption_event').where('user_id', req.id)
    res.json(data)
  }

  async getUserSymptoms (req, res) {
    const data = await this.db.select('*').from('symptom_event').where('user_id', req.id)
    res.json(data)
  }
}
