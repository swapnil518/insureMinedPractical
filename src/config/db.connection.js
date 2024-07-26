const mongoose = require("mongoose");

// Connection URL and Database Name
const url = process.env.MONGODB_CONNECTION_URL;
const dbName = process.env.DB_NAME;

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB using Mongoose
async function connectToDatabase() {
  try {
    await mongoose.connect(url, options);
    console.log("Connected successfully to MongoDB server");

    // Optionally, you can use `dbName` to select the specific database if needed
    mongoose.connection.useDb(dbName);

    // Return the mongoose connection
    return mongoose.connection;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

module.exports = connectToDatabase;