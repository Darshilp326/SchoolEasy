const express = require("express");
const router = express.Router();
const {teacherController}=require('../controllers')

router.route('/signup').post(teacherController.registerTeacher);
router.route('/login').post(teacherController.loginTeacher);
module.exports=router;