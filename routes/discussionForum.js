const express = require("express");
const router = express.Router();
const {discussionForumController}=require('../controllers')

router.route('/add').post(discussionForumController.addDiscussionForum);
router.route('/:id').get(discussionForumController.getDiscussionForum)
router.route('/:id/question/add').post(discussionForumController.addQuestionToForum)
router.route('/:id/answer').post(discussionForumController.addAnswerToForum)
router.route('/:id/answer').get(discussionForumController.getAnswersOfSpecificQuestion)

module.exports=router;