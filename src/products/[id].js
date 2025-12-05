import mongoose from 'mongoose';
import Product from '../models/Product.js';

const uri = process.env.MONGODB_URI;
let conn = null;

async function connect() {
  if (conn == null) {
    conn = await mongoose.connect(uri);
  }
}

export async function GET(request, { params }) {
  await connect();
  const product = await Product.findById(params.id).populate('reviews').lean();
  if (!product) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(product), { headers: { 'Content-Type': 'application/json' } });
}