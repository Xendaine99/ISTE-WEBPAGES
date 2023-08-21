const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  teamName:{
    type : String,
    required : true
  },
  name1:{
    type : String,
    required : true
  },
  email1: {
    type: String,
    required : true,
    unique : true
  },
  rollNo1:{
    type : String,
    required : true
  },
  phoneNo1:{
    type : String,
  },
  name2:{
    type : String,
    required : true
  },
  email2: {
    type: String,
    required : true,
  },
  rollNo2:{
    type : String,
    required : true
  },
  phoneNo2:{
    type : String,
  },
  name3:{
    type : String,
    required : true
  },
  email3: {
    type: String,
    required : true,
  },
  rollNo3:{
    type : String,
    required : true
  },
  phoneNo3:{
    type : String,
  },
  name4:{
    type : String,
  },
  email4: {
    type: String,
  },
  rollNo4:{
    type : String,
  },
  phoneNo4:{
    type : String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;