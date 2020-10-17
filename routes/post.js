const express = require("express");
const router = express.Router();
const {postController,authController}=require('../controllers')

router.route('/:standardId/add').post(authController.ensureAuthenticated,postController.addPost);
//router.route('/login').post(postController.loginTeacher);
module.exports=router;