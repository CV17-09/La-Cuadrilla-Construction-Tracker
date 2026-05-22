export default function AlertsPage() {
  const alerts = [
    {
      id: 1,
      message: "Concrete Bags are below minimum threshold.",
      severity: "High",
      material: "Concrete Bags",
      category: "Inventory",
      project: "Downtown Site",
      time: "10:45 AM",
    },
    {
      id: 2,
      message: "Steel Beams inventory updated after QR scan.",
      severity: "Medium",
      material: "Steel Beams",
      category: "QR Activity",
      project: "Warehouse Expansion",
      time: "11:15 AM",
    },
    {
      id: 3,
      message: "Safety Helmets stock is critically low.",
      severity: "Critical",
      material: "Safety Helmets",
      category: "Inventory",
      project: "North Project",
      time: "12:30 PM",
    },
    {
      id: 4,
      message: "Electrical Wire shipment delayed.",
      severity: "High",
      material: "Electrical Wire",
      category: "Supplier",
      project: "South Project",
      time: "1:20 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🚨 Alerts
        </h1>

        <p className="text-gray-600 mb-8">
          Monitor inventory warnings and system notifications.
        </p>


        {/* Summary cards */}

        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">
              Total Alerts
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              {alerts.length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">
              Critical
            </p>

            <h2 className="text-3xl font-bold text-red-600">
              {
                alerts.filter(
                  a => a.severity === "Critical"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">
              High
            </p>

            <h2 className="text-3xl font-bold text-orange-600">
              {
                alerts.filter(
                  a => a.severity === "High"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">
              Medium
            </p>

            <h2 className="text-3xl font-bold text-yellow-600">
              {
                alerts.filter(
                  a => a.severity === "Medium"
                ).length
              }
            </h2>
          </div>

        </div>


        <div className="space-y-6">

          {alerts.map((alert) => (

            <div
              key={alert.id}
              className={`bg-white rounded-3xl shadow-xl p-6 border-l-8
              ${
                alert.severity === "Critical"
                  ? "border-red-500"
                  : alert.severity === "High"
                  ? "border-orange-500"
                  : "border-yellow-500"
              }`}
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-xl font-bold text-gray-900">
                    {alert.message}
                  </h2>

                  <div className="mt-3 space-y-2 text-gray-600">

                    <p>
                      📦 Material:
                      {" "}
                      {alert.material}
                    </p>

                    <p>
                      📁 Category:
                      {" "}
                      {alert.category}
                    </p>

                    <p>
                      🏗️ Project:
                      {" "}
                      {alert.project}
                    </p>

                    <p>
                      ⏰ Time:
                      {" "}
                      {alert.time}
                    </p>

                  </div>

                </div>


                <div className="flex flex-col items-end gap-4">

                  <span
                    className={`px-4 py-2 rounded-full font-semibold
                    ${
                      alert.severity === "Critical"
                        ? "bg-red-100 text-red-700"
                        : alert.severity === "High"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {alert.severity}
                  </span>


                  <div className="flex gap-2">

                    <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
                      View
                    </button>

                    <button className="bg-gray-500 text-white px-4 py-2 rounded-xl">
                      Dismiss
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}