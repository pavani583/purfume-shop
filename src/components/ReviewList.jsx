export default function ReviewList({ reviews }) {
  return (
    <div className="space-y-6">
      {reviews.length === 0 ? <p>No reviews yet.</p> : null}
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between">
            <h4 className="font-semibold">{r.name}</h4>
            <span>{'★'.repeat(r.rating)} ({r.rating}/5)</span>
          </div>
          <p className="mt-2 text-gray-700">{r.comment}</p>
          <p className="text-sm text-gray-500 mt-2">{new Date(r.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}