const {Schema,model} = require('mongoose')

const DepartmentSchema= new Schema({
    name:{
        type:String,
        required:true,
    },
    countryId:{
        type:Schema.ObjectId,
        required:true
    }
},{collection:'department',versionKey:false})

module.exports  = model('department',DepartmentSchema)