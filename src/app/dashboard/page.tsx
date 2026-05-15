import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Overview of inventory, requests, alerts, and active job sites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          
          <Link href="/materials">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
              <p className="text-gray-500">Materials</p>
              <h2 className="text-4xl font-bold text-orange-600">250</h2>
            </div>
          </Link>

          <Link href="/requests">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
              <p className="text-gray-500">Requests</p>
              <h2 className="text-4xl font-bold text-orange-600">18</h2>
            </div>
          </Link>

          <Link href="/alerts">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
              <p className="text-gray-500">Alerts</p>
              <h2 className="text-4xl font-bold text-red-600">5</h2>
            </div>
          </Link>

          <Link href="/projects">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer transition">
              <p className="text-gray-500">Projects</p>
              <h2 className="text-4xl font-bold text-orange-600">12</h2>
            </div>
          </Link>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>📦 Steel beams checked out for Downtown Site</li>
            <li>🚨 Low stock alert created for concrete bags</li>
            <li>📝 New material request submitted by crew member</li>
            <li>📱 QR scan completed for safety helmets</li>
          </ul>
        </div>
      </div>
    </main>
  );
}