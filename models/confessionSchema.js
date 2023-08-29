import { Schema, model, models } from 'mongoose';
import User from './userSchema'

const confessionSchema = new Schema(
  {
    content: {
      type: String,
      max: 500,
    },
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    votedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
      },
    ],
   
  },
  { timestamps: true }
);

export default models.confession || model('confession', confessionSchema);
