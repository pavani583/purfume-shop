import mongoose from 'mongoose';
import Product from './src/api/models/Product.js';
import 'dotenv/config';

const uri = process.env.MONGODB_URI;

const sampleProducts = [
  {
    name: "Eternal Bloom",
    shortDescription: "Floral elegance with rose and jasmine notes",
    description: "A captivating blend of Bulgarian rose, jasmine sambac, and white musk that evokes timeless femininity.",
    price: 149,
    image: "https://images.unsplash.com/photo-1622473471730-bcf03d3c9c09?w=800&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1608248549824-7c06f4c56c8e?w=800&auto=format",
      "https://images.unsplash.com/photo-1594032023027-1c32b945b908?w=800&auto=format",
      "https://images.unsplash.com/photo-1617227126528-676d7b0c53e9?w=800&auto=format"
    ],
    sizes: ["50", "100"],
    reviews: []
  },
  {
    name: "Midnight Oud",
    shortDescription: "Deep woody oriental fragrance",
    price: 189,
    image: "https://images.unsplash.com/photo-1541647376583-8d2e9e66c3d8?w=800&auto=format",
    gallery: [...], // add more Unsplash links
    sizes: ["50", "100"],
    reviews: []
  },
  // add 3 more similar objects with different Unsplash perfume images...
  // I'll give you 5 total
];

(async () => {
  await mongoose.connect(uri);
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('Seeded!');
  process.exit();
})();