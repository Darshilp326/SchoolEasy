const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
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
      type:Number
  },
  student:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Student"
  }
});

module.exports = mongoose.model("Parent", parentSchema);
