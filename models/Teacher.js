const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNo:{
      type:Number
  },
  password: {
    type: String,
  },
  standard:{
      type:String,
      ref:"Standard"
  },
  subject:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Subject"
  }
});

module.exports = mongoose.model("Teacher", teacherSchema);
