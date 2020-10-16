const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required:true
  },
  age:{
      type:String
  },
  password: {
    type: String,
    required:true,
  },
  standard:{
      type:String
  },
  parent:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Parent"
  }
});

module.exports = mongoose.model("Student", studentSchema);
