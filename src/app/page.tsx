export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-100 p-10 md:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🚧 Smart Construction Inventory Platform
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                  La-Cuadrilla
                  <span className="block text-orange-600">
                    Construction Tracker
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Real-time material tracking system with QR scanning,
                  inventory management, alerts, and project monitoring for
                  modern construction teams.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-orange-300">
                    📦 View Materials
                  </button>

                  <button className="bg-white border border-gray-300 hover:border-orange-400 hover:text-orange-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-sm">
                    📱 Open QR Scanner
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-orange-300 blur-3xl opacity-30 rounded-full"></div>

                <div className="relative bg-gradient-to-br from-orange-500 to-yellow-400 p-10 rounded-3xl shadow-2xl text-white w-[320px]">
                  <div className="text-7xl mb-6 text-center">🏗️</div>

                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Live Inventory
                  </h2>

                  <div className="space-y-4 mt-6">
                    <div className="bg-white/20 rounded-2xl p-4 flex justify-between items-center">
                      <span>Steel Beams</span>
                      <span className="font-bold">124</span>
                    </div>

                    <div className="bg-white/20 rounded-2xl p-4 flex justify-between items-center">
                      <span>Concrete Bags</span>
                      <span className="font-bold">52</span>
                    </div>

                    <div className="bg-white/20 rounded-2xl p-4 flex justify-between items-center">
                      <span>Safety Helmets</span>
                      <span className="font-bold">18</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="text-5xl mb-5">📦</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Materials
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Track construction materials, quantities, and inventory levels
                across multiple job sites.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="text-5xl mb-5">📱</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                QR Scanner
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Scan materials instantly with QR technology for fast check-ins
                and inventory updates.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="text-5xl mb-5">🚨</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Alerts
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Receive automatic notifications for low stock levels and urgent
                inventory updates.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="text-5xl mb-5">🏗️</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Projects
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Manage inventory and activity across multiple construction
                projects and locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h2 className="text-5xl font-extrabold text-orange-400 mb-2">
                  250+
                </h2>
                <p className="text-gray-300 text-lg">
                  Materials Tracked
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-extrabold text-orange-400 mb-2">
                  12
                </h2>
                <p className="text-gray-300 text-lg">
                  Active Projects
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-extrabold text-orange-400 mb-2">
                  98%
                </h2>
                <p className="text-gray-300 text-lg">
                  Inventory Accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}