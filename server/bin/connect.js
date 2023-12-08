// db.js

const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI);

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  db.once("open", () => {
    console.log("Database Connected");
  });

  db.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  db.on("reconnected", () => {
    console.log("MongoDB reconnected");
  });

  db.on("close", () => {
    console.log("MongoDB connection closed");
  });

  return db;
}

module.exports = connectToDatabase;
