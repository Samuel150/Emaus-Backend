const Course = require('../models/course.model')
const courseCtrl ={
    getCourses:async(req,res)=>{
        try{
            const courses = await Course.find({})
            res.json(courses)
        }catch(e){
            res.json({message:e})
        }
    },
    createCourse:async(req,res)=>{
        try{
            const cycleId=req.params.cycleId
            const body = req.body
            const count = await Course.find({cycleId:cycleId}).count()
            const course = new Course({...body,...{order:body.order?body.order:count+1}})
            const savedCourse = await course.save()
            res.json(savedCourse)
        }catch(e){
            res.json({message:e})
        }
    },
    getCycleCourse:async(req,res)=>{
        try{
            const cycleId= req.params.cycleId
            const cycleCourses = await Course.find({cycleId:cycleId})
            res.json(cycleCourses)
        }catch(e){
            res.json({message:e})
        }
    },
    updateCourse:async(req,res)=>{
        try{
            const courseId = req.params.courseId
            const body = req.body
            const updatedCourse = await Course.findByIdAndUpdate(courseId,body)
            res.json(updatedCourse)
        }catch(e){
            res.json({message:e});
        }
    },
    deleteCourse:async(req,res)=>{
        try{
            const courseId=req.params.courseId
            const deletedCourse = await Course.findByIdAndDelete(courseId)
            res.json(deletedCourse)
        }catch(e){
            res.json({message:e});
        }
    }
}
module.exports = courseCtrl