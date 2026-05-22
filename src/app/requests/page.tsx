export default function RequestsPage() {
  const requests = [
    {
      id: 1,
      material: "Concrete Bags",
      quantity: 40,
      project: "Downtown Site",
      requester: "John Smith",
      date: "04/18/2026",
      status: "Pending",
      priority: "High",
      type: "Emergency",
    },
    {
      id: 2,
      material: "Safety Helmets",
      quantity: 15,
      project: "North Project",
      requester: "Maria Lopez",
      date: "04/19/2026",
      status: "Approved",
      priority: "Medium",
      type: "Stock Out",
    },
    {
      id: 3,
      material: "Steel Beams",
      quantity: 20,
      project: "Warehouse Expansion",
      requester: "David Johnson",
      date: "04/20/2026",
      status: "Completed",
      priority: "Low",
      type: "Stock In",
    },
    {
      id: 4,
      material: "PVC Pipes",
      quantity: 50,
      project: "South Site",
      requester: "Carlos Rivera",
      date: "04/21/2026",
      status: "Pending",
      priority: "High",
      type: "Stock Out",
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
            Track requests submitted by workers and supervisors.
          </p>
        </div>


        {/* Summary Cards */}

        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Total Requests
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              {requests.length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="text-3xl font-bold text-yellow-600">
              {
                requests.filter(
                  r => r.status === "Pending"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              Approved
            </p>

            <h2 className="text-3xl font-bold text-green-600">
              {
                requests.filter(
                  r => r.status === "Approved"
                ).length
              }
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <p className="text-gray-500">
              High Priority
            </p>

            <h2 className="text-3xl font-bold text-red-600">
              {
                requests.filter(
                  r => r.priority === "High"
                ).length
              }
            </h2>
          </div>

        </div>


        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-orange-50">
              <tr>
                <th className="p-5 text-left text-gray-900">
                  Material
                </th>

                <th className="p-5 text-left text-gray-900">
                  Quantity
                </th>

                <th className="p-5 text-left text-gray-900">
                  Project
                </th>

                <th className="p-5 text-left text-gray-900">
                  Requester
                </th>

                <th className="p-5 text-left text-gray-900">
                  Date
                </th>

                <th className="p-5 text-left text-gray-900">
                  Type
                </th>

                <th className="p-5 text-left text-gray-900">
                  Priority
                </th>

                <th className="p-5 text-left text-gray-900">
                  Status
                </th>

                <th className="p-5 text-left text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>


            <tbody>

              {requests.map((request) => (

                <tr
                  key={request.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-5 text-gray-900 font-semibold">
                    {request.material}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.quantity}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.project}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.requester}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.date}
                  </td>

                  <td className="p-5 text-gray-800">
                    {request.type}
                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-2 rounded-full text-sm
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
                      className={`px-3 py-2 rounded-full text-sm
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

                  <td className="p-5 flex gap-2">

                    <button className="bg-green-500 text-white px-3 py-2 rounded-xl">
                      Approve
                    </button>

                    <button className="bg-red-500 text-white px-3 py-2 rounded-xl">
                      Reject
                    </button>

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