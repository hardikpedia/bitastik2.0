import { Schema, model, models } from 'mongoose';

const newsSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  }

}, { timestamps: true });
export default models.News || model('News', newsSchema);

