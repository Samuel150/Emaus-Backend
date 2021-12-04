const express = require('express')
const router = express.Router()

const DepartmentCtrl = require('../controllers/department.controller')

router.get('/:countryId',DepartmentCtrl.getDepartmentsByCountryId)

module.exports = router