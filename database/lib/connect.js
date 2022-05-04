import mongoose from 'mongoose';

const connect = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected');
  } else {
    mongoose.connect(process.env.MONGODB_URI, () => {
      console.log('MongoDB started Successfully');
    });
  }
};

export default connect;
