import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🏗️ Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Overview of inventory, requests, alerts, and job activity.
        </p>


        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">

          <Link href="/materials">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

              <div className="text-4xl mb-2">
                📦
              </div>

              <p className="text-gray-500">
                Materials
              </p>

              <h2 className="text-4xl font-bold text-orange-600">
                250
              </h2>

            </div>
          </Link>


          <Link href="/requests">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

              <div className="text-4xl mb-2">
                📝
              </div>

              <p className="text-gray-500">
                Requests
              </p>

              <h2 className="text-4xl font-bold text-orange-600">
                18
              </h2>

            </div>
          </Link>


          <Link href="/alerts">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

              <div className="text-4xl mb-2">
                🚨
              </div>

              <p className="text-gray-500">
                Alerts
              </p>

              <h2 className="text-4xl font-bold text-red-600">
                5
              </h2>

            </div>
          </Link>


          <Link href="/job-sites">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

              <div className="text-4xl mb-2">
                🏗️
              </div>

              <p className="text-gray-500">
                Job Sites
              </p>

              <h2 className="text-4xl font-bold text-orange-600">
                12
              </h2>

            </div>
          </Link>


          <Link href="/inventory">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

              <div className="text-4xl mb-2">
                📊
              </div>

              <p className="text-gray-500">
                Inventory
              </p>

              <h2 className="text-4xl font-bold text-green-600">
                89%
              </h2>

            </div>
          </Link>

        </div>


        <div className="grid md:grid-cols-2 gap-8">


          {/* Recent Activity */}

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Recent Activity
            </h2>

            <ul className="space-y-4 text-gray-700">

              <li>
                📦 Steel beams checked out for Downtown Site
              </li>

              <li>
                🚨 Low stock alert created for Concrete Bags
              </li>

              <li>
                📝 Material request submitted by crew member
              </li>

              <li>
                📱 QR scan completed for Safety Helmets
              </li>

            </ul>

          </div>


          {/* Quick Actions */}

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Quick Actions
            </h2>

            <div className="grid gap-4">

              <Link
                href="/materials/add"
                className="bg-orange-100 text-orange-700 p-4 rounded-2xl font-semibold hover:bg-orange-200"
              >
                ➕ Add Material
              </Link>

              <Link
                href="/requests/create"
                className="bg-blue-100 text-blue-700 p-4 rounded-2xl font-semibold hover:bg-blue-200"
              >
                📝 Create Request
              </Link>

              <Link
                href="/qr-scanner"
                className="bg-green-100 text-green-700 p-4 rounded-2xl font-semibold hover:bg-green-200"
              >
                📱 Scan QR Code
              </Link>

              <Link
                href="/alerts"
                className="bg-red-100 text-red-700 p-4 rounded-2xl font-semibold hover:bg-red-200"
              >
                🚨 View Alerts
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}