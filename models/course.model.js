const {Schema,model} = require('mongoose')

const CourseSchema = new Schema({
    cycleId:{
        type:Schema.ObjectId,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    order:{
        type:Number,
        required:true,
    },
    registerDate:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:String
    }
},{collection:'course',versionKey:false})

module.exports=model('course',CourseSchema)