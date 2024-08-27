// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
MONGO_URI="mongodb+srv://Saurabh:Saurabh%402315@atlascluster.g2fzp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"

const connectDB = async () => {
 try {
  const DB_OPTIONS = {
   dbName: 'Portfolio',
  }
  await mongoose.connect(MONGO_URI, DB_OPTIONS);
  console.log('Connected Successfully..');
 } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
 }
}

module.exports = connectDB;
