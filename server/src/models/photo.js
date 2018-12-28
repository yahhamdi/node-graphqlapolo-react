import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
