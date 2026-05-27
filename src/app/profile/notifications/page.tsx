"use client";

import { useState } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New material request submitted", read: false },
    { id: 2, message: "QR scan completed successfully", read: false },
    { id: 3, message: "Inventory report generated", read: true },
  ]);

  const [settings, setSettings] = useState({
    materialRequests: true,
    qrScans: true,
    reports: false,
  });

  const markRead = (id: number) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8 transition">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        🔔 Notifications
      </h1>

      <p className="text-gray-700 mb-8">
        Manage your notifications and preferences.
      </p>

      <div className="bg-white text-gray-900 rounded-3xl shadow-lg p-6 mb-8 max-w-3xl border border-gray-200">
        <h2 className="text-xl font-bold mb-4">
          Notification Settings
        </h2>

        <div className="space-y-4">
          <label className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">
            <span>Material Requests</span>
            <input
              type="checkbox"
              checked={settings.materialRequests}
              onChange={() => toggleSetting("materialRequests")}
              className="w-5 h-5"
            />
          </label>

          <label className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">
            <span>QR Scan Updates</span>
            <input
              type="checkbox"
              checked={settings.qrScans}
              onChange={() => toggleSetting("qrScans")}
              className="w-5 h-5"
            />
          </label>

          <label className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">
            <span>Reports</span>
            <input
              type="checkbox"
              checked={settings.reports}
              onChange={() => toggleSetting("reports")}
              className="w-5 h-5"
            />
          </label>
        </div>
      </div>

      <div className="bg-white text-gray-900 rounded-3xl shadow-lg p-6 max-w-3xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Recent Notifications
        </h2>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-600">
              No notifications left.
            </p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`border rounded-2xl p-4 flex justify-between items-center shadow-sm ${
                  notification.read
                    ? "bg-gray-200 border-gray-300 text-gray-800"
                    : "bg-orange-100 border-orange-300 text-gray-900"
                }`}
              >
                <div>
                  <p className="font-medium">
                    {notification.message}
                  </p>

                  <p className="text-sm text-gray-600">
                    {notification.read ? "Read" : "Unread"}
                  </p>
                </div>

                <div className="flex gap-2">
                  {!notification.read && (
                    <button
                      onClick={() => markRead(notification.id)}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      Read
                    </button>
                  )}

                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}