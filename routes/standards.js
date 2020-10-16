const express = require("express");
const router = express.Router();
const {standardController}=require('../controllers')

router.route('/add').post(standardController.addStandard);
router.route('/:id').get(standardController.getStandard);
module.exports=router;