export default function NotificationsPage() {
  const notifications = [
    "Low stock: Concrete Bags below 60 units",
    "New material request submitted",
    "Steel Beams inventory updated",
    "QR scan completed successfully",
    "Safety Helmets running low",
  ];

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">🔔 Notifications</h1>
      <p className="text-gray-600 mb-8">Recent inventory and project alerts.</p>

      <div className="bg-white rounded-3xl shadow-lg p-6 max-w-3xl">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-4 text-gray-800"
            >
              {notification}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}