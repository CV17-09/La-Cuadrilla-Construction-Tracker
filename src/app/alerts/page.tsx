export default function AlertsPage() {
  const alerts = [
    {
      id: 1,
      message: "Concrete Bags are below minimum threshold.",
      severity: "High",
      project: "Downtown Site",
    },
    {
      id: 2,
      message: "Steel Beams inventory updated after QR scan.",
      severity: "Medium",
      project: "Warehouse Expansion",
    },
    {
      id: 3,
      message: "Safety Helmets stock is critically low.",
      severity: "Critical",
      project: "North Project",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🚨 Alerts
        </h1>

        <p className="text-gray-600 mb-8">
          Monitor inventory warnings and important system notifications.
        </p>

        <div className="space-y-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-white rounded-3xl shadow-xl p-6 border-l-8 border-orange-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {alert.message}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Project: {alert.project}
                  </p>
                </div>

                <span
                  className={`px-5 py-2 rounded-full font-semibold text-sm ${
                    alert.severity === "Critical"
                      ? "bg-red-100 text-red-700"
                      : alert.severity === "High"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {alert.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}