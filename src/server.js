import app from "./app.js";
import mongoose from "mongoose";
import config from "./app/config/index.js";

let server;

async function main() {
  try {
    await mongoose.connect(config.databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database connected");
    server = app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.log("Error connecting to the database:", err);
  }
}
main();
