const Department = require('../models/deparment.model')

const DepartmentCtrl = {
    getDepartmentsByCountryId:async(req,res)=>{
        try{
            const countryId= req.params.countryId
            const departments = await Department.find({countryId:countryId})
            res.json(departments)
        }catch(e){
            res.json({message:e})
        }
    }
}

module.exports = DepartmentCtrl