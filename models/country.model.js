const {Schema,model}=require('mongoose');

const CountrySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
},{collection:'country',versionKey:false})

module.exports = model('country',CountrySchema)