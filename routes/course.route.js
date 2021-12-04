const express = require('express')
const router = express.Router()
const CourseCtrl=require('../controllers/course.controller')


router.get('/', CourseCtrl.getCourses)

router.post('/:cycleId', CourseCtrl.createCourse)

router.get('/:cycleId',CourseCtrl.getCycleCourse)

router.put('/:courseId',CourseCtrl.updateCourse)

router.delete('/:courseId',CourseCtrl.deleteCourse)

module.exports=router