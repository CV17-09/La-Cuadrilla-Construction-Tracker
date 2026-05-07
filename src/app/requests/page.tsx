export default function RequestsPage() {
  const requests = [
    {
      id: 1,
      material: "Concrete Bags",
      quantity: 40,
      project: "Downtown Site",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      material: "Safety Helmets",
      quantity: 15,
      project: "North Project",
      status: "Approved",
      priority: "Medium",
    },
    {
      id: 3,
      material: "Steel Beams",
      quantity: 20,
      project: "Warehouse Expansion",
      status: "Completed",
      priority: "Low",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📝 Material Requests
        </h1>

        <p className="text-gray-600 mb-8">
          Track material requests submitted by workers and supervisors.
        </p>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-50">
              <tr>
                <th className="text-left p-5">Material</th>
                <th className="text-left p-5">Quantity</th>
                <th className="text-left p-5">Project</th>
                <th className="text-left p-5">Priority</th>
                <th className="text-left p-5">Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t hover:bg-gray-50">
                  <td className="p-5 font-semibold">{request.material}</td>
                  <td className="p-5">{request.quantity}</td>
                  <td className="p-5">{request.project}</td>
                  <td className="p-5">{request.priority}</td>
                  <td className="p-5 font-semibold text-orange-600">
                    {request.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}