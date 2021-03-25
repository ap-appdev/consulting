const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/users', controller('createUser'))
router.put('/users/:id', controller('updateUser'))
router.delete('/users/:id', controller('deleteUser'))
router.get('/users', controller('getUsers'))
router.get('/users/:id', controller('getUserById'))
router.get('/users/organization/:id', controller('getUsersByOrganizationId'))

router.post('/organizations', controller('createOrganization'))
router.put('/organizations/:id', controller('updateOrganization'))
router.delete('/organizations/:id', controller('deleteOrganization'))
router.get('/organizations', controller('getOrganizations'))
router.get('/organizations/:id', controller('getOrganizationById'))
router.get('/organizations/user/:id', controller('getOrganizationByUserId'))

module.exports = router
