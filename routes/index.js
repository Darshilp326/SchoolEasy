const express = require("express");
const router = express.Router();
const studentRoute=require('./students')
const parentRoute=require('./parents')
const teacherRoute=require('./teachers')
const standardRoute=require('./standards')
const subjectRoute=require('./subjects')
const discussionForumRoute=require('./discussionForum')
const materialRoute=require('./materials')

router.use("/students",studentRoute);
router.use("/parents",parentRoute)
router.use('/teachers',teacherRoute)
router.use('/standards',standardRoute)
router.use('/subjects',subjectRoute)
router.use('/discussions',discussionForumRoute)
router.use('/materials',materialRoute)

module.exports=router