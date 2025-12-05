import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ productId, onNewReview }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/reviews', {
        productId,
        name,
        rating: Number(rating),
        comment,
      });
      onNewReview(res.data);
      setName('');
      setComment('');
      setRating(5);
    } catch (err) {
      alert('Error submitting review');
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required className="w-full border p-3 mb-4 rounded" />
      <select value={rating} onChange={e => setRating(e.target.value)} className="w-full border p-3 mb-4 rounded">
        {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
      </select>
      <textarea placeholder="Your review" value={comment} onChange={e => setComment(e.target.value)} required rows="4" className="w-full border p-3 mb-4 rounded"></textarea>
      <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Submit Review</button>
    </form>
  );
}