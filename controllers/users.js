// import UserSchema from "../models/UserSchema.js";
// import mongoose from "mongoose";
const mongoose = require("mongoose")
const UserSchema = require("../models/userSchema.js")
const createQuestion = (req, res) => {
  const user = req.body;
  const newUser = new UserSchema(user);

  try {
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getQuestions = async(req,res)=>{
    try {
        const questions = await UserSchema.find();
        // console.log(postMessages);
        res.status(200).json(questions)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
const answerQuestion= async (req,res) =>{
    const {id: _id} = req.params
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

   const answer = await UserSchema.findByIdAndUpdate(_id,{ ...post , _id},{new:true})

   res.json(answer)
}

module.exports = {createQuestion,getQuestions,answerQuestion}