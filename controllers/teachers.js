const bcrypt=require('bcryptjs')
const moment=require('moment')
const {Teacher,Standard,User}=require('../models/index') 
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

const registerTeacher=async(req,res)=>{
    try {
        const { name, email, password,mobileNo,standard} = req.body;
        const std=await Standard.findOne({number:standard})
        const user = await Teacher.findOne({
          email,
        });
        if (user) {
          return res.status(400).json({ msg: "Email is already registered" });
        }
        const teacher = new Teacher({
          name,
          email,
          password,
          mobileNo
        });
        const newUser=new User({
          name,
          userId:teacher.id
        })
        await newUser.save()
        std.teachers.push(teacher.id)
        await std.save();
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(teacher.password, salt, (err, hash) => {
            if (err) throw err;
            teacher.password = hash;
            teacher
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

const loginTeacher = function (req, res, next) {
    Teacher.findOne({ email: req.body.email })
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
            console.log(user.id)
            res.status(200).json({ token });
          } else {
            res.status(401).json({ message: "Authentication failed" });
          }
        });
      })
      .catch((err) => console.log(err));
  };
module.exports={
    registerTeacher,
    loginTeacher
}