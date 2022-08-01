import express from "express"
const router = express.Router()

import {createQuestion, getQuestions,answerQuestion} from "../controllers/users.js"


router.post('/ask',createQuestion)
router.get('/',getQuestions)
router.patch('/:id',answerQuestion)

export default router;