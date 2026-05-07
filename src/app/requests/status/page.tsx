export default function RequestStatusPage() {
  const statuses = [
    { id: 1, request: "Concrete Bags", status: "Pending", date: "04/21/2026" },
    { id: 2, request: "Safety Helmets", status: "Approved", date: "04/22/2026" },
    { id: 3, request: "Steel Beams", status: "Completed", date: "04/23/2026" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ✅ Request Status
        </h1>

        <p className="text-gray-600 mb-8">
          View the current status of submitted material requests.
        </p>

        <div className="space-y-5">
          {statuses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {item.request}
                </h2>
                <p className="text-gray-500">{item.date}</p>
              </div>

              <span className="font-bold text-orange-600">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}