const Cycle = require('../models/cycle.model')

const cycleCtrl = {
    getCycles:async (req,res)=>{
        try{
            const cycles = await Cycle.find({});
            res.json(cycles);
        }catch(e){
            res.json({message:err})
        }
    },
    createCycle:async (req,res)=>{
        try{
            const count = await Cycle.count()
            const bodyRequest = req.body
            const cycle = new Cycle({...bodyRequest,...{order:bodyRequest.order?bodyRequest.order:count+1}})
            const savedCycle = await cycle.save();
            res.json(savedCycle)
        }catch(e){
            res.json({message:e})
        }
    },

    updateCycle:async(req,res)=>{
        const cycleId =req.params.cycleId 
        const body = req.body
        try{
            const updatedCycle = await Cycle.findByIdAndUpdate(cycleId,body)

            res.json(updatedCycle)
        }catch(e){
            res.json({message:e});
        }
    },

    deleteCycle:async (req,res)=>{
        const cycleId =req.params.cycleId 
        try{
            const removedCycle = await Cycle.findByIdAndDelete(cycleId)
            res.json(removedCycle)
        }catch(e){
            res.json({message:e});
        }
    }
    
}

module.exports = cycleCtrl