// const http = require('http')
// const server  = http.createServer((req,res)=>{
//   res.status=200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello world!');
// })
// server.listen(3000,()=>{
//   console.log('Server on port 3000')
// })

// const express = require('express')
// const morgan = require('morgan')
const mongoose = require('mongoose');
// const cors = require('cors')

const app = require('./app')

//settings
// app.set('name','Samu express')
// app.set('port',3000)
// app.set('view engine','ejs')

mongoose.connect('mongodb://localhost:27017/emaus')
  .then(()=>{
    console.log("Conexión a la base datos establecida") 
  }).catch(e=>{
    console.log(e)
  })


//middlewares
// function logger(req,res,next){
//   console.log(`Request received from ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//   next()
// }
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'))

// app.use('/posts',(req,res,next)=>{
//   console.log('Posts middleware')
//   next()
// })


//routes

// app.all('/user/:id',(req,res,next)=>{
//   console.log('por aqui paso')
//   next();
// })
// app.get('/',(req,res)=>{
//   res.render('index.ejs')
//   // res.send('<h1>Hello world!</h2>')
// })


// app.get('/user',(req,res)=>{
//   res.json({
//     userName:'Samue',
//     lastName:'Huanca'
//   })
// })


// app.post('/user/:id',(req,res)=>{
//   const body = req.body
//   const queryParams = req.params
//   console.log('body',body)
//   console.log('queryParams',queryParams)
//   res.json({
//     userName:body.userName,
//     lastName:body.lastName,
//   })
// })

// app.post('/about',(req,res)=>{
//   res.send('Post!')
// })

// app.put('/about',(req,res)=>{
//   res.send('Put!')
// })

// app.delete('/about',(req,res)=>{
//   res.send('Delete!')
// })

// app.use(express.static('public'));



app.listen(app.get('port'),()=>{
  console.log(`Server on port ${app.get('port')}`)
})

