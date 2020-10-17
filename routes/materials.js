const express = require("express");
const router = express.Router();
const multer=require('multer')
const {materialController,authController}=require('../controllers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/materials/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname);
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024*1025*10, // only allow upto 10mb size file
    },
    fileFilter: (req, file, cb) => {
        console.log(file.mimetype)
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype==='application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Please upload images with extension .jpeg/.jpg/.png with file size < 10mb'), false);
        }
    }
});

router.route('/:subjectId/add').post(upload.single('materials'),authController.ensureAuthenticated,materialController.addMaterial);
//router.route('/:standard/all').get(subjectController.getAllSubjects)

module.exports=router;