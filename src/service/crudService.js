import knex from 'knex'
import knexConfig from '../../knexfile'
const env = process.env.NODE_ENV || 'development'


export default class CrudService {
  constructor (table) {
    this.db = knex(knexConfig[env])
    this.table = table
  }

  // TODO handle errors
  list () {
    try {
      return this.db(this.table).select('*')
    }
    catch (e) {
      console.log(e)
    }
  }

  create (data) {
    try {
      return this.db(this.table).insert(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  update (id, data) {
    try {
      return this.db(this.table).where('id', id).update(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  read (id) {
    try {
      return this.db(this.table).select('*').where('id', id)
    }
    catch (e) {
      console.log(e)
    }
  }

  delete (id) {
    try {
      return this.db(this.table).where('id', id).del()
    }
    catch (e) {
      console.log(e)
    }
  }
}
