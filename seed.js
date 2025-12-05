import mongoose from 'mongoose';
import Product from './src/api/models/Product.js';
import 'dotenv/config';

const uri = process.env.MONGODB_URI || 'your-local-mongo-uri-if-testing-locally';

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
      "https://images.unsplash.com/photo-1617227126528-676d7b0c53e9?w=800&auto=format",
      "https://images.unsplash.com/photo-1594026180671-3c717cec065f?w=800&auto=format"
    ],
    sizes: ["50", "100"],
    reviews: []
  },
  {
    name: "Midnight Oud",
    shortDescription: "Deep woody oriental fragrance",
    description: "Rich agarwood combined with saffron, amber, and patchouli for an intense and mysterious aura.",
    price: 189,
    image: "https://images.unsplash.com/photo-1541647376583-8d2e9e66c3d8?w=800&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format",
      "https://images.unsplash.com/photo-1594026180671-3c717cec065f?w=800&auto=format",
      "https://images.unsplash.com/photo-1617227126528-676d7b0c53e9?w=800&auto=format"
    ],
    sizes: ["50", "100"],
    reviews: []
  },
  {
    name: "Citrus Breeze",
    shortDescription: "Fresh and invigorating citrus explosion",
    description: "Zesty bergamot, lemon, and mandarin blended with aquatic notes and cedarwood.",
    price: 129,
    image: "https://images.unsplash.com/photo-1594032023027-1c32b945b908?w=800&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1622473471730-bcf03d3c9c09?w=800&auto=format",
      "https://images.unsplash.com/photo-1608248549824-7c06f4c56c8e?w=800&auto=format",
      "https://images.unsplash.com/photo-1617227126528-676d7b0c53e9?w=800&auto=format"
    ],
    sizes: ["50", "100"],
    reviews: []
  },
  {
    name: "Vanilla Dream",
    shortDescription: "Warm and sweet gourmand delight",
    description: "Creamy Madagascar vanilla infused with caramel, tonka bean, and a touch of sandalwood.",
    price: 139,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1594026180671-3c717cec065f?w=800&auto=format",
      "https://images.unsplash.com/photo-1541647376583-8d2e9e66c3d8?w=800&auto=format",
      "https://images.unsplash.com/photo-1622473471730-bcf03d3c9c09?w=800&auto=format"
    ],
    sizes: ["75", "100"],
    reviews: []
  },
  {
    name: "Ocean Mist",
    shortDescription: "Clean and refreshing marine scent",
    description: "Crisp sea salt, cucumber, and lavender with a base of oakmoss and driftwood.",
    price: 119,
    image: "https://images.unsplash.com/photo-1617227126528-676d7b0c53e9?w=800&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1608248549824-7c06f4c56c8e?w=800&auto=format",
      "https://images.unsplash.com/photo-1594032023027-1c32b945b908?w=800&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format"
    ],
    sizes: ["50", "100"],
    reviews: []
  }
];

(async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);

    console.log('Seeded 5 products successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();