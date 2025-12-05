import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  price: Number,
  image: String,
  gallery: [String],
  sizes: [String],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);