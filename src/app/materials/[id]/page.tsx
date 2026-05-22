export default function MaterialDetailsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📦 Steel Beams
        </h1>

        <p className="text-gray-600 mb-8">
          Material details, inventory tracking, supplier information,
          QR data, and transaction history.
        </p>


        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Quantity
            </p>

            <h2 className="text-4xl font-bold text-orange-600">
              124
            </h2>
          </div>


          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Project
            </p>

            <h2 className="text-xl font-bold text-gray-900">
              Downtown Site
            </h2>
          </div>


          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Status
            </p>

            <h2 className="text-xl font-bold text-green-600">
              In Stock
            </h2>
          </div>


          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Cost Per Unit
            </p>

            <h2 className="text-xl font-bold text-gray-900">
              $120
            </h2>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Material Information */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Material Information
            </h2>

            <div className="space-y-4 text-gray-700">

              <p>
                <strong>Category:</strong>
                {" "}Structural Materials
              </p>

              <p>
                <strong>Supplier:</strong>
                {" "}ABC Steel
              </p>

              <p>
                <strong>Unit:</strong>
                {" "}Pieces
              </p>

              <p>
                <strong>Storage Location:</strong>
                {" "}Warehouse A
              </p>

              <p>
                <strong>Manufacturer:</strong>
                {" "}SteelCorp Industries
              </p>

              <p>
                <strong>Minimum Threshold:</strong>
                {" "}20
              </p>

            </div>

          </div>


          {/* QR Section */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              QR Information
            </h2>

            <div className="flex flex-col items-center">

              <div className="bg-gray-200 h-48 w-48 rounded-xl flex items-center justify-center mb-4">

                <span className="text-gray-500">
                  QR Code
                </span>

              </div>

              <p className="text-gray-700">
                QR-STEEL-001
              </p>

            </div>

          </div>

        </div>


        {/* Recent Transactions */}

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Transactions
          </h2>

          <ul className="space-y-4">

            <li className="border-b pb-3 text-gray-700">
              ✅ Stock In: 50 units added
            </li>

            <li className="border-b pb-3 text-gray-700">
              📤 Stock Out: 12 units used at Downtown Site
            </li>

            <li className="border-b pb-3 text-gray-700">
              📱 QR scan completed by Worker
            </li>

            <li className="text-gray-700">
              🚚 Delivery received from ABC Steel
            </li>

          </ul>

        </div>

      </div>

    </main>
  );
}