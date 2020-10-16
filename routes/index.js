const express = require("express");
const router = express.Router();
const studentRoute=require('./students')
const parentRoute=require('./parents')
const teacherRoute=require('./teachers')

router.use("/students",studentRoute);
router.use("/parents",parentRoute)
router.use('/teachers',teacherRoute)

module.exports=router