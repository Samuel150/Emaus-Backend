const {Schema,model}= require('mongoose')

const CitySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    departmentId:{
        type:Schema.ObjectId,
        required:true
    }
},{collection:'city',versionKey:false})

module.exports=model('city',CitySchema)