const express = require("express");
const router = express.Router();
const {noticeController,authController}=require('../controllers')

router.route('/:id/add').post(authController.ensureAuthenticated,noticeController.addNotice);
router.route('/:id/getAll').get(noticeController.getAllNotices);
module.exports=router;