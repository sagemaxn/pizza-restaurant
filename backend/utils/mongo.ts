const mongoose = require('mongoose')

//import mongoose from 'mongoose'
const connection: any = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  const uri = process.env.MONGODB_URI;

  mongoose
    .connect(uri, {useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.log("error connection to MongoDB:", error.message);
    });
}

export default connect;
