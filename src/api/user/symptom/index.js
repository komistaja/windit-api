import { Router } from 'express'
import knex from 'knex'
import knexConfig from '../../../../knexfile'
const router = Router()
require('dotenv').config()

const env = process.env.NODE_ENV || 'development'

const db = knex(knexConfig[env])

export default () => {
  router.get('/', async (req, res) => {
    const data = await db.select('*').from('symptom_event').where('user_id', req.user[0].id)
    res.json(data)
  })
  return router
}
