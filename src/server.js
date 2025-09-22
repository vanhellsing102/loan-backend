import app from "./app.js";
import mongoose from "mongoose";
// import config from "./app/config/index.js";

let server;

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { //config.databaseUrl
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database connected");
    server = app.listen(process.env.PORT, () => { //config.port
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Error connecting to the database:", err);
  }
}
main();
