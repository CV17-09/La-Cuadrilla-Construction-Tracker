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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📝 Material Requests
          </h1>

          <p className="text-gray-700 text-lg">
            Track material requests submitted by workers and supervisors.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

          <table className="w-full">

            <thead className="bg-orange-50">
              <tr>
                <th className="text-left p-5 text-gray-900 font-bold">
                  Material
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Quantity
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Project
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Priority
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr
                  key={request.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 text-gray-900 font-semibold">
                    {request.material}
                  </td>

                  <td className="p-5 text-gray-800 font-medium">
                    {request.quantity}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.project}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold
                      ${
                        request.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : request.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {request.priority}
                    </span>
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold
                      ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : request.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {request.status}
                    </span>
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