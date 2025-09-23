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
    const port = process.env.PORT;
    server = app.listen(port, "0.0.0.0", () => { //config.port
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log("Error connecting to the database:", err);
  }
}
main();
