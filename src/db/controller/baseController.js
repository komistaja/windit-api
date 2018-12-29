import { Router } from 'express'
import CrudService from './crudService'

export default class BaseController {
  constructor (table) {
    this.crudService = new CrudService(table)
  }

  route () {
    const router = Router()

    router.param('id', async (req, res, next, id) => {
      const item = await this.crudService.read(id)
      if (!item[0]) {
        return res.json('Not found')
      }
      req.item = item[0]
      next()
    })

    router.get('/', async (req, res) => {
      const data = await this.crudService.list()
      res.json(data)
    })

    router.get('/:id', async (req, res) => {
      const data = await this.crudService.read(req.item.id)
      res.json(data)
    })

    router.post('/', async (req, res) => {
      const data = await this.crudService.create(req.body)
      res.json(data)
    })

    router.put('/', async (req, res) => {
      const data = await this.crudService.update(req.body.id, req.body)
      res.json(data)
    })

    router.delete('/:id', async (req, res) => {
      const data = await this.crudService.delete(req.item.id)
      res.json(data)
    })

    return router
  }
}
