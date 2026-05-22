export default function StockPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🔄 Stock In / Stock Out
        </h1>

        <p className="text-gray-600 mb-8">
          Record when materials are added or removed from inventory.
        </p>

        <div className="grid grid-cols-2 gap-8">

          {/* Form */}

          <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

            <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">

              <option>Select Material</option>

              <option>Steel Beams</option>
              <option>Concrete Bags</option>
              <option>Safety Helmets</option>
              <option>Wood Planks</option>
              <option>Electrical Wire</option>

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

            <input
              type="text"
              placeholder="Project Site"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Requested By"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Supplier"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <textarea
              placeholder="Notes"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 min-h-24"
            />

            <button
              className="w-full bg-orange-600 hover:bg-orange-700
              text-white py-4 rounded-2xl font-bold shadow-lg"
            >
              Save Transaction
            </button>

          </form>


          {/* Side Panel */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow-xl">

              <h2 className="font-bold text-xl mb-4">
                Current Inventory
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Steel Beams</span>
                  <span className="font-bold">
                    124
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Concrete Bags</span>
                  <span className="font-bold">
                    52
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Safety Helmets</span>
                  <span className="font-bold">
                    18
                  </span>
                </div>

              </div>

            </div>


            <div className="bg-white rounded-3xl p-6 shadow-xl">

              <h2 className="font-bold text-xl mb-4">
                Recent Transactions
              </h2>

              <div className="space-y-3">

                <p>
                  📦 +20 Steel Beams
                </p>

                <p>
                  📤 -5 Safety Helmets
                </p>

                <p>
                  📦 +15 Concrete Bags
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}