const Users = require('./users')
const Organizations = require('./organizations')

const controller = {
  createUser: async (req, res) => {
    const result = await Users.create(req.body)
    return res.json(result)
  },
  updateUser: async (req, res) => {
    const result = await Users.update(req.params.id, req.body)
    return res.json(result)
  },
  deleteUser: async (req, res) => {
    const result = await Users.delete(req.params.id)
    return res.json(result)
  },
  getUsers: async (req, res) => {
    const result = await Users.get()
    return res.json(result)
  },
  getUserById: async (req, res) => {
    const result = await Users.getById(req.params.id)
    return res.json(result)
  },
  getUsersByOrganizationId: async (req, res) => {
    const result = await Users.getByOrganizationId(req.params.id)
    return res.json(result)
  },
  createOrganization: async (req, res) => {
    const result = await Organizations.create(req.body)
    return res.json(result)
  },
  updateOrganization: async (req, res) => {
    const result = await Organizations.update(req.params.id, req.body)
    return res.json(result)
  },
  deleteOrganization: async (req, res) => {
    const result = await Organizations.delete(req.params.id)
    return res.json(result)
  },
  getOrganizations: async (req, res) => {
    const result = await Organizations.get()
    return res.json(result)
  },
  getOrganizationById: async (req, res) => {
    const result = await Organizations.getById(req.params.id)
    return res.json(result)
  },
  getOrganizationByUserId: async (req, res) => {
    const result = await Organizations.getByUserId(req.params.id)
    return res.json(result)
  }
}

module.exports = (method) => {
  return async (request, response, next) => {
    try {
      await controller[method](request, response, next)
    } catch (error) {
      return next(error)
    }
  }
}
