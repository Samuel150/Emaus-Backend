const {Schema,model} = require('mongoose')

const StudentSchema = new Schema({
    names:{
        type:String,
        required:true,
    },
    lastNames:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    telephone:{
        type:Number,
        required:true,
    },
    documentNumber:{
        type:String,
    },
    
})