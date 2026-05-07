export default function QRScannerPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📱 QR Scanner
        </h1>

        <p className="text-gray-600 mb-8">
          Scan material QR codes to quickly view or update inventory.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="border-4 border-dashed border-orange-300 rounded-3xl p-16 bg-orange-50">
            <div className="text-7xl mb-6">📷</div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Camera Scanner Area
            </h2>

            <p className="text-gray-600 mb-6">
              QR scanning functionality will be connected here using html5-qrcode.
            </p>

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg">
              Start Scanner
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}