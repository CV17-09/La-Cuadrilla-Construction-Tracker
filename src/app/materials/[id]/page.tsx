export default function MaterialDetailsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📦 Steel Beams
        </h1>

        <p className="text-gray-600 mb-8">
          Material details, QR code, stock level, and transaction history.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">Quantity</p>
            <h2 className="text-4xl font-bold text-orange-600">124</h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">Project</p>
            <h2 className="text-xl font-bold text-gray-900">Downtown Site</h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">Status</p>
            <h2 className="text-xl font-bold text-green-600">In Stock</h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>

          <ul className="space-y-4 text-gray-700">
            <li>✅ Stock In: 50 units added</li>
            <li>📤 Stock Out: 12 units used at Downtown Site</li>
            <li>📱 QR scan completed by worker</li>
          </ul>
        </div>
      </div>
    </main>
  );
}