import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI,
};
