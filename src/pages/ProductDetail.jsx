import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(res => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleNewReview = (newReview) => {
    setProduct(prev => ({
      ...prev,
      reviews: [...prev.reviews, newReview]
    }));
  };

  const shareProduct = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      alert('Share link copied: ' + window.location.href);
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!product) return <p className="text-center py-20">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
          <div className="grid grid-cols-4 gap-4 mt-6">
            {product.gallery.map((img, i) => (
              <img key={i} src={img} alt="" className="rounded-lg cursor-pointer hover:opacity-80" />
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-semibold text-indigo-600 mb-6">${product.price}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="mb-8">
            <p className="font-semibold mb-2">Available sizes:</p>
            <div className="flex gap-4">
              {product.sizes.map(s => (
                <button key={s} className="border border-gray-400 px-6 py-3 rounded hover:bg-indigo-600 hover:text-white transition">
                  {s} ml
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 mb-6">
            Add to Cart
          </button>

          <button onClick={shareProduct} className="w-full border border-indigo-600 text-indigo-600 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50">
            Share Product
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <ReviewForm productId={id} onNewReview={handleNewReview} />
        <ReviewList reviews={product.reviews} />
      </div>
    </div>
  );
}