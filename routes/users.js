// import express from "express"
const express = require("express")
const router = express.Router()
// import {createQuestion, getQuestions,answerQuestion} from "../controllers/users.js"
const {createQuestion, getQuestions,answerQuestion}  = require("../controllers/users.js")

router.post('/ask',createQuestion)
router.get('/',getQuestions)
router.patch('/:id',answerQuestion)

module.exports = router;