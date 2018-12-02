import { Router } from 'express'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    console.log('Request from: ', req.ip)
    res.json({ text: 'Hello World (sburdolol)!' })
  })
  return router
}
