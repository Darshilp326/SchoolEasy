const express = require("express");
const router = express.Router();
const {materialController}=require('../controllers')

router.route('/add').post(subjectController.addSubject);
router.route('/:standard/all').get(subjectController.getAllSubjects)

module.exports=router;