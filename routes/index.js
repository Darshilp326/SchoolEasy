const express = require("express");
const router = express.Router();
const studentRoute=require('./students')
const parentRoute=require('./parents')
const teacherRoute=require('./teachers')
const standardRoute=require('./standards')
const subjectRoute=require('./subjects')
const discussionForumRoute=require('./discussionForum')
const materialRoute=require('./materials')
const postRoute=require('./post')
const noticeRoute=require('./noticeForAll')

router.use("/students",studentRoute);
router.use("/parents",parentRoute)
router.use('/teachers',teacherRoute)
router.use('/standards',standardRoute)
router.use('/subjects',subjectRoute)
router.use('/discussions',discussionForumRoute)
router.use('/materials',materialRoute)
router.use('/posts',postRoute)
//router.use('/notice',noticeRoute)

module.exports=router