export default function EditMaterialPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ✏️ Edit Material
        </h1>

        <p className="text-gray-600 mb-8">
          Update material information and stock settings.
        </p>

        <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
          <input
            type="text"
            defaultValue="Steel Beams"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <input
            type="number"
            defaultValue="124"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <input
            type="number"
            defaultValue="25"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}