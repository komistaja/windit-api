import knex from 'knex'
import knexConfig from '../../../knexfile'
const env = process.env.NODE_ENV || 'development'

const db = knex(knexConfig[env])

export default class CrudService {
  constructor (table) {
    this.table = table
  }

  async list () {
    return db(this.table).select('*')
  }

  create (data) {
    return db(this.table).insert(data)
  }

  update (id, data) {
    return db(this.table).where('id', id).update(data)
  }

  read (id) {
    return db(this.table).select('*').where('id', id)
  }

  delete (id) {
    return db(this.table).where('id', id).del()
  }
}
