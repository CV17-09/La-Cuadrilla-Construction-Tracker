export default function CreateRequestPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ➕ Create Material Request
        </h1>

        <p className="text-gray-600 mb-8">
          Submit a request for materials needed at a job site.
        </p>

        <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Select Material</option>
            <option>Steel Beams</option>
            <option>Concrete Bags</option>
            <option>Safety Helmets</option>
          </select>

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Select Project</option>
            <option>Downtown Site</option>
            <option>North Project</option>
            <option>Warehouse Expansion</option>
          </select>

          <input
            type="number"
            placeholder="Quantity Needed"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            placeholder="Reason for request"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 min-h-32"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}