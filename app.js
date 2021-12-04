const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cycleRoute = require('./routes/cycles.route')
const courseRoute = require('./routes/course.route')
const countryRoute = require('./routes/country.route')
const departmentRoute = require('./routes/deparment.route')
const cityRoute = require('./routes/city.route')

//settings
const app = express()
app.set('port', process.env.PORT||3000)
//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/cycle',cycleRoute);
app.use('/course',courseRoute)
app.use('/country',countryRoute)
app.use('/department',departmentRoute)
app.use('/city',cityRoute)

module.exports = app;