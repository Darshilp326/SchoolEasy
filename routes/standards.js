const express = require("express");
const router = express.Router();
const {standardController}=require('../controllers')

router.route('/add').post(standardController.addStandard);
//router.route('/login').post(parentController.loginParent);
module.exports=router;