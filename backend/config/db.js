import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`Error ${err.message}`);
      return process.exit(1);
    });
};

export default connectDB;
