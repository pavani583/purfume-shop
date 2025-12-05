import mongoose from 'mongoose';
import Review from './models/Review.js';
import Product from './models/Product.js';

const uri = process.env.MONGODB_URI;
let conn = null;

async function connect() {
  if (conn == null) {
    conn = await mongoose.connect(uri);
  }
}

export async function POST(request) {
  await connect();
  const body = await request.json();
  const review = await Review.create({
    product: body.productId,
    name: body.name,
    rating: body.rating,
    comment: body.comment,
  });
  await Product.findByIdAndUpdate(body.productId, { $push: { reviews: review._id } });
  return new Response(JSON.stringify(review), { status: 201, headers: { 'Content-Type': 'application/json' } });
}