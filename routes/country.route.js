const express = require('express')
const router = express.Router()

const CountryCtrl=  require('../controllers/country.controller')

router.get('/',CountryCtrl.getCountries)

module.exports = router