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
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900">
            <option>Structural Materials</option>
            <option>Safety Equipment</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>Finishing Materials</option>
          </select>

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900">
            <option>ABC Steel</option>
            <option>BuildPro</option>
            <option>SafeGear</option>
            <option>WireTech</option>
            <option>PipeWorks</option>
          </select>

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900">
            <option>Pieces</option>
            <option>Bags</option>
            <option>Boxes</option>
            <option>Rolls</option>
            <option>Buckets</option>
          </select>

          <input
            type="number"
            defaultValue="124"
            placeholder="Current Quantity"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            type="number"
            defaultValue="120"
            placeholder="Cost Per Unit"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            type="number"
            defaultValue="25"
            placeholder="Minimum Threshold"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            type="text"
            defaultValue="Downtown Site"
            placeholder="Project Site"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            type="text"
            defaultValue="Warehouse A"
            placeholder="Storage Location"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            type="text"
            defaultValue="QR-STEEL-001"
            placeholder="QR Code"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}