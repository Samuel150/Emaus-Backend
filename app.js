const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cycleRoute = require('./routes/cycles.route')
const courseRoute = require('./routes/course.route')
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

module.exports = app;