const express = require('express')
const router = express.Router();
const CycleCtrl = require('../controllers/cycle.controller')

router.get('/',CycleCtrl.getCycles)

router.post('/',CycleCtrl.createCycle)

router.put('/:cycleId',CycleCtrl.updateCycle)

router.delete('/:cycleId',CycleCtrl.deleteCycle)

module.exports = router