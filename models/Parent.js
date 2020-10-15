const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNo:{
      type:String
  },
  password: {
    type: String,
  },
  student:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Student"
  }
});

module.exports = mongoose.model("Parent", parentSchema);
