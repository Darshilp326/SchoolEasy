const express = require("express");
const router = express.Router();
const studentRoute=require('./students')


router.use("/students",studentRoute);

module.exports=router