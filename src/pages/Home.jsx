import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products').then(res => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your Signature Scent</h1>
          <p className="text-xl mb-8">Luxury fragrances crafted for the modern soul</p>
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Shop New Arrivals
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Perfumes</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {products.map(p => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}