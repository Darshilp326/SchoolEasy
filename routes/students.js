const express = require("express");
const router = express.Router();
const {studentController}=require('../controllers')

router.route('/signup').post(studentController.registerStudent);
router.route('/login').post(studentController.loginStudent);
module.exports=router;