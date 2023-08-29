import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    max:25,
  },
  note: {
    type: String,
    max: 100,
  },
});

const userSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  insta: {
    type: String,
    unique: true,
  },
  linkedIn: {
    type: String,
    unique: true,
  },
  github: {
    type: String,
    unique: true,
  },
  bio: {
    type: String,
    max: 500,
  },
  branch: {
    type: String,
    required: true,
  },
  yearofgraduation: {
    type: Number,
    required: true,
  },
  hostel: {
    type: Number,
  },
  room: {
    type: Number,
  },
  phone: {
    type: String,
  },
  notes: {
    type: [todoSchema], // Embedding the array of todos using the todoSchema
    default: [],
  },
});

export default models.User || model('User', userSchema);
