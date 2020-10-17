const bcrypt=require('bcryptjs')
const moment=require('moment')
const {Student,Standard,User}=require('../models/index') 
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

const registerStudent=async(req,res)=>{
    try {
        const { name, email, password,age,standard} = req.body;
        console.log(email)
        const user = await Student.findOne({
          email,
        });
        const std=await Standard.findOne({number:standard})
        if (user) {
          return res.status(400).json({ msg: "Email is already registered" });
        }
        console.log(std)
        const student = new Student({
          name,
          email,
          password,
          age,
          standard
        });
        console.log(student)
        const newUser=new User({
          name,
          userId:student._id
        })
        await newUser.save()
        console.log(newUser)
        std.students.push(student.id)
        await std.save()
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(student.password, salt, (err, hash) => {
            if (err) throw err;
            student.password = hash;
            student
              .save()
              .then((user) => {
                console.log(user)
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

const loginStudent = function (req, res, next) {
    Student.findOne({ email: req.body.email })
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
    registerStudent,
    loginStudent
}