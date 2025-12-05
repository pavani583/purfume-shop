import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  name: String,
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);