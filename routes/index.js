const express = require("express");
const router = express.Router();
const studentRoute=require('./students')
const parentRoute=require('./parents')
const teacherRoute=require('./teachers')
const standardRoute=require('./standards')
const subjectRoute=require('./subjects')

router.use("/students",studentRoute);
router.use("/parents",parentRoute)
router.use('/teachers',teacherRoute)
router.use('/standards',standardRoute)
router.use('/subjects',subjectRoute)

module.exports=router