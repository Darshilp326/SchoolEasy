const express = require("express");
const router = express.Router();
const {standardController}=require('../controllers')

router.route('/add').post(standardController.addStandard);
router.route('/:id').get(standardController.getStandard);
router.route('/:id/students').get(standardController.getStudentsOfStandard);
router.route('/:id/teachers').get(standardController.getTeachersOfStandard);
module.exports=router;