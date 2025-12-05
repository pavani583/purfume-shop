import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
        <img src="/images/dummy.jpg" alt={product.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-2 line-clamp-2">{product.shortDescription}</p>
          <p className="text-2xl font-bold text-indigo-600 mt-4">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
