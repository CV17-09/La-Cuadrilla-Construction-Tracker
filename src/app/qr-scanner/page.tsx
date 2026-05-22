export default function QRScannerPage() {
  const recentScans = [
    {
      id: 1,
      material: "Steel Beams",
      code: "QR-STEEL-001",
      project: "Downtown Site",
      time: "10:45 AM",
      action: "Viewed",
    },
    {
      id: 2,
      material: "Concrete Bags",
      code: "QR-CONCRETE-002",
      project: "Warehouse A",
      time: "11:20 AM",
      action: "Stock Updated",
    },
    {
      id: 3,
      material: "Safety Helmets",
      code: "QR-HELMET-003",
      project: "North Project",
      time: "12:05 PM",
      action: "Checked Out",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📱 QR Scanner
        </h1>

        <p className="text-gray-600 mb-8">
          Scan material QR codes to quickly view or update inventory.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Scanner Actions
              </h2>

              <div className="space-y-3">
                <button className="w-full bg-orange-100 text-orange-700 py-3 rounded-2xl font-semibold">
                  View Material Details
                </button>

                <button className="w-full bg-green-100 text-green-700 py-3 rounded-2xl font-semibold">
                  Stock In
                </button>

                <button className="w-full bg-red-100 text-red-700 py-3 rounded-2xl font-semibold">
                  Stock Out
                </button>

                <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-2xl font-semibold">
                  Report Issue
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Last Scanned Material
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Material:</strong> Steel Beams
                </p>
                <p>
                  <strong>QR Code:</strong> QR-STEEL-001
                </p>
                <p>
                  <strong>Current Quantity:</strong> 124 pieces
                </p>
                <p>
                  <strong>Project:</strong> Downtown Site
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="text-green-600 font-bold">
                    In Stock
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent QR Scans
          </h2>

          <div className="space-y-4">
            {recentScans.map((scan) => (
              <div
                key={scan.id}
                className="border border-gray-200 rounded-2xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-gray-900">
                    {scan.material}
                  </h3>

                  <p className="text-gray-600">
                    {scan.code} • {scan.project}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-900 font-semibold">
                    {scan.action}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {scan.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}