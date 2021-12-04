const express = require('express')
const router = express.Router()
const CityCtrl = require('../controllers/city.controller')

router.get('/:departmentId',CityCtrl.getCitiesByDepartmentId)

module.exports = router