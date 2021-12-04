const City = require('../models/city.model')

const cityCtrl = {
    getCitiesByDepartmentId:async(req,res)=>{
        try{
            const departmentId = req.params.departmentId
            const cities = await City.find({departmentId:departmentId})
            res.json(cities)
        }catch(e){
            res.json({message:e})
        }
    }
}

module.exports = cityCtrl