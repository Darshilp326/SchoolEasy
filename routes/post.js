const express = require("express");
const router = express.Router();
const {postController,authController}=require('../controllers')
const multer=require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/posts/');
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
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Please upload images with extension .jpeg/.jpg/.png/pdf with file size < 10mb'), false);
        }
    }
});

router.route('/:standardId/add').post(authController.ensureAuthenticated,postController.addPost);
router.route('/:standardId/get').get(postController.getAllPost);
module.exports=router;