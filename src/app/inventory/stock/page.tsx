export default function StockPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🔄 Stock In / Stock Out
        </h1>

        <p className="text-gray-600 mb-8">
          Record when materials are added or removed from inventory.
        </p>

        <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Select Material</option>
            <option>Steel Beams</option>
            <option>Concrete Bags</option>
            <option>Safety Helmets</option>
          </select>

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Transaction Type</option>
            <option>Stock In</option>
            <option>Stock Out</option>
          </select>

          <input
            type="number"
            placeholder="Quantity"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <textarea
            placeholder="Notes"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 min-h-32"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Save Transaction
          </button>
        </form>
      </div>
    </main>
  );
}