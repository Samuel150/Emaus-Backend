
const mongoose = require('mongoose');
const app = require('./app')

mongoose.connect('mongodb://localhost:27017/emaus')
  .then(()=>{
    console.log("Conexión a la base datos establecida") 
  }).catch(e=>{
    console.log(e)
  })

app.listen(app.get('port'),()=>{
  console.log(`Server on port ${app.get('port')}`)
})

