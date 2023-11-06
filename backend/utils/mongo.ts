const mongoose = require("mongoose");

const connection: any = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  const uri = 'mongodb+srv://sage:simple@cluster0.dcenh.mongodb.net/pizza?retryWrites=true&w=majority'

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.log("error connection to MongoDB:", error.message);
      }
    });
}

export default connect;
