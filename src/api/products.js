import mongoose from 'mongoose';
import Product from './models/Product.js';

const uri = process.env.MONGODB_URI;

let conn = null;

async function connect() {
  if (conn == null) {
    conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  }
  return conn;
}

export async function GET() {
  await connect();
  const products = await Product.find({}).lean();
  return new Response(JSON.stringify(products), { headers: { 'Content-Type': 'application/json' } });
}