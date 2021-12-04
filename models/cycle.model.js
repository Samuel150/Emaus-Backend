
const {Schema, model} = require('mongoose')

const CycleSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    order:{
        type:Number
    },
    registerDate:{
        type:Date,
        default:Date.now()
    },
},{collection:'cycle',versionKey:false})

module.exports = model('cycle',CycleSchema)