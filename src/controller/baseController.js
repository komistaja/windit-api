export default function (service) {
  return {
    params: async (req, res, next, id) => {
      console.log(id)
      req.id = id
      next()
    },

    getAll: async (req, res) => {
      const data = await service.list()
      res.json(data)
    },

    getOne: async (req, res) => {
      const data = await service.read(req.id)
      res.json(data)
    },

    create: async (req, res) => {
      const data = await service.create(req.body)
      res.json(data)
    },

    update: async (req, res) => {
      const data = await service.update(req.body.id, req.body)
      res.json(data)
    },

    delete: async (req, res) => {
      const data = await service.delete(req.item.id)
      res.json(data)
    }
  }
}
