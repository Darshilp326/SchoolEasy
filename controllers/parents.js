const bcrypt=require('bcryptjs')
const moment=require('moment')
const {Parent,User,Student}=require('../models/index') 
const jwt=require('jwt-simple')
const keys = require("../config/keys");
const JWT_KEY=keys.JWT.jwt_token

function createJwtToken(user) {
    const payload = {
      user,
      iat: new Date().getTime(),
      exp: moment().add(7, "days").valueOf(),
    };
    return jwt.encode(payload, JWT_KEY);
}
const registerParent=async(req,res)=>{
    try {
        const { name, email, password,mobileNo,studentEmail} = req.body;
        const student=await Student.findOne({
          email:studentEmail
        })
        if(!student){
          return res.status(400).json({ msg: "Student is not registered"});
        }
        const user = await Parent.findOne({
          email,
        });
        if (user) {
          return res.status(400).json({ msg: "Email is already registered" });
        }
        const parent = new Parent({
          name,
          email,
          password,
          mobileNo,
          student:student.id,
          standard:student.standard
        });
        const newUser=new User({
          name,
          userId:parent.id
        })
        await newUser.save()
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(parent.password, salt, (err, hash) => {
            if (err) throw err;
            parent.password = hash;
            parent
              .save()
              .then((user) => {
                res.send(user);
              })
              .catch((err) => console.log(err));
          });
        });
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ msg: "Invalid request" });
      }
}

const loginParent = function (req, res, next) {
    Parent.findOne({ email: req.body.email }).populate({path:'student'})
      .then(function (user) {
        if (user.length < 1) {
          res.status(401).json({ message: "Authentication failed" });
        }
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (err) {
            res.status(401).json({ message: "User not found" });
          }
          if (result) {
            const token = createJwtToken({ id: user.id });
            res.status(200).json({ token,user });
          } else {
            res.status(401).json({ message: "Authentication failed" });
          }
        });
      })
      .catch((err) => console.log(err));
  };
module.exports={
    registerParent,
    loginParent
}