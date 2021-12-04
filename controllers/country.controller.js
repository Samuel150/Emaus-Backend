const Country = require('../models/country.model')

const CountryCtrl = {
    getCountries:async(req,res)=>{
        try{
            const countries = await Country.find({})
            res.json(countries)
        }catch(e){
            res.json({message:e})
        }
    }
}

module.exports = CountryCtrl