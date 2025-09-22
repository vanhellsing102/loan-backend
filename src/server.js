import app from '../src/app.js';
import mongoose from 'mongoose';
import config from '../app/config/index.js';

// MongoDB cache for serverless
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Export serverless function
export default async function handler(req, res) {
  await dbConnect();
  app(req, res);
}

app.listen(5000,()=>{
    console.log(`alsdkf alkdjfs afj adjf`);
})