"use client";

import { useState } from "react";

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      message: "Concrete Bags are below minimum threshold.",
      severity: "High",
      material: "Concrete Bags",
      category: "Inventory",
      project: "Downtown Site",
      time: "10:45 AM",
      dismissed: false,
      viewed: false,
    },
    {
      id: 2,
      message: "Steel Beams inventory updated after QR scan.",
      severity: "Medium",
      material: "Steel Beams",
      category: "QR Activity",
      project: "Warehouse Expansion",
      time: "11:15 AM",
      dismissed: false,
      viewed: false,
    },
    {
      id: 3,
      message: "Safety Helmets stock is critically low.",
      severity: "Critical",
      material: "Safety Helmets",
      category: "Inventory",
      project: "North Project",
      time: "12:30 PM",
      dismissed: false,
      viewed: false,
    },
    {
      id: 4,
      message: "Electrical Wire shipment delayed.",
      severity: "High",
      material: "Electrical Wire",
      category: "Supplier",
      project: "South Project",
      time: "1:20 PM",
      dismissed: false,
      viewed: false,
    },
  ]);

  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  const viewAlert = (id: number) => {
    const alertToView = alerts.find((alert) => alert.id === id);

    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, viewed: true } : alert
      )
    );

    setSelectedAlert(alertToView);
  };

  const dismissAlert = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, dismissed: true } : alert
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🚨 Alerts
        </h1>

        <p className="text-gray-600 mb-8">
          Monitor inventory warnings and system notifications.
        </p>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Total Alerts</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {alerts.length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Critical</p>
            <h2 className="text-3xl font-bold text-red-600">
              {alerts.filter((a) => a.severity === "Critical").length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Viewed</p>
            <h2 className="text-3xl font-bold text-green-600">
              {alerts.filter((a) => a.viewed).length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <p className="text-gray-500">Dismissed</p>
            <h2 className="text-3xl font-bold text-gray-600">
              {alerts.filter((a) => a.dismissed).length}
            </h2>
          </div>
        </div>

        {selectedAlert && (
          <div className="mb-8 bg-white border border-orange-200 rounded-3xl shadow-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Notification Details
                </h2>

                <p className="text-gray-700 mb-2">
                  <strong>Message:</strong> {selectedAlert.message}
                </p>

                <p className="text-gray-700 mb-2">
                  <strong>Material:</strong> {selectedAlert.material}
                </p>

                <p className="text-gray-700 mb-2">
                  <strong>Category:</strong> {selectedAlert.category}
                </p>

                <p className="text-gray-700 mb-2">
                  <strong>Project:</strong> {selectedAlert.project}
                </p>

                <p className="text-gray-700">
                  <strong>Time:</strong> {selectedAlert.time}
                </p>
              </div>

              <button
                onClick={() => setSelectedAlert(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`bg-white rounded-3xl shadow-xl p-6 border-l-8 ${
                alert.dismissed
                  ? "opacity-60 border-gray-400"
                  : alert.severity === "Critical"
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
                    <p>📦 Material: {alert.material}</p>
                    <p>📁 Category: {alert.category}</p>
                    <p>🏗️ Project: {alert.project}</p>
                    <p>⏰ Time: {alert.time}</p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {alert.viewed && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Viewed
                      </span>
                    )}

                    {alert.dismissed && (
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Dismissed
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <span
                    className={`px-4 py-2 rounded-full font-semibold ${
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
                    <button
                      onClick={() => viewAlert(alert.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl"
                    >
                      View
                    </button>

                    {!alert.dismissed ? (
                      <button
                        onClick={() => dismissAlert(alert.id)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl"
                      >
                        Dismiss
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-600 px-4 py-2 rounded-xl cursor-not-allowed"
                      >
                        Dismissed
                      </button>
                    )}
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