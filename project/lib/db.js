import mongoose from "mongoose";

const connection = {};

export default async function connectDatabase() {
  if (connection?.isConnected) return;
const options = {
  user:'admin',
  pass:'admin',
  dbName:'admin'
}
  return await mongoose
    .connect("mongodb+srv://tsuikit159:k24620929@project.r89zdvu.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database Connected!");
      connection.isConnected = true;
    })
    .catch((error) => {
      if (error) throw Error("Database connection error...");
    });
}