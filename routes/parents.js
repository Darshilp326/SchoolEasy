const express = require("express");
const router = express.Router();
const {parentController}=require('../controllers')

router.route('/signup').post(parentController.registerParent);
router.route('/login').post(parentController.loginParent);
module.exports=router;