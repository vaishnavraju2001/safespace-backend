import mongoose from "mongoose"

const userschema = mongoose.Schema({
  question: String,
  email: String,
  number: Number,
  state:String,
  district:String,
  answer:{
    type:String,
    default:""
  },
  answered:{
    type:Boolean,
    default:false
  }
});


const UserSchema = mongoose.model('Questions',userschema)

export default UserSchema