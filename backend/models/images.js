import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  name: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
