import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () =>
      console.log("MongoDB connected SuccessFully")
    );
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please Make sure MongoDB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somethig went Wrong!");
    console.log(error);
  }
}
