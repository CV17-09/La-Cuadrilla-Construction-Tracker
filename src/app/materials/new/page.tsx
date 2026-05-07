export default function AddMaterialPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ➕ Add Material
        </h1>

        <p className="text-gray-600 mb-8">
          Add a new construction material to the inventory system.
        </p>

        <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Material Name
            </label>
            <input
              type="text"
              placeholder="Example: Steel Beams"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="Example: Structural Materials"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              placeholder="Example: 100"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Minimum Threshold
            </label>
            <input
              type="number"
              placeholder="Example: 25"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg"
          >
            Save Material
          </button>
        </form>
      </div>
    </main>
  );
}