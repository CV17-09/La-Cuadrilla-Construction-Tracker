export default function RequestStatusPage() {
  const statuses = [
    {
      id: 1,
      request: "Concrete Bags",
      quantity: 40,
      project: "Downtown Site",
      requester: "John Smith",
      status: "Pending",
      priority: "High",
      date: "04/21/2026",
      delivery: "04/25/2026",
      progress: 25,
    },
    {
      id: 2,
      request: "Safety Helmets",
      quantity: 15,
      project: "North Project",
      requester: "Maria Lopez",
      status: "Approved",
      priority: "Medium",
      date: "04/22/2026",
      delivery: "04/26/2026",
      progress: 70,
    },
    {
      id: 3,
      request: "Steel Beams",
      quantity: 20,
      project: "Warehouse Expansion",
      requester: "David Johnson",
      status: "Completed",
      priority: "Low",
      date: "04/23/2026",
      delivery: "04/23/2026",
      progress: 100,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ✅ Request Status
        </h1>

        <p className="text-gray-600 mb-8">
          View the current status of submitted requests.
        </p>

        <div className="space-y-6">

          {statuses.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl p-6"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.request}
                  </h2>

                  <p className="text-gray-500">
                    Request #{item.id}
                  </p>

                </div>


                <span
                  className={`px-4 py-2 rounded-full font-semibold
                  ${
                    item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "Approved"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.status}
                </span>

              </div>


              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-gray-700">

                <div>
                  <strong>Quantity:</strong>
                  {" "}
                  {item.quantity}
                </div>

                <div>
                  <strong>Project:</strong>
                  {" "}
                  {item.project}
                </div>

                <div>
                  <strong>Requested By:</strong>
                  {" "}
                  {item.requester}
                </div>

                <div>
                  <strong>Priority:</strong>
                  {" "}
                  {item.priority}
                </div>

                <div>
                  <strong>Submitted:</strong>
                  {" "}
                  {item.date}
                </div>

                <div>
                  <strong>Delivery:</strong>
                  {" "}
                  {item.delivery}
                </div>

              </div>


              {/* Progress */}

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Progress
                  </span>

                  <span className="font-semibold text-gray-800">
                    {item.progress}%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div
                    className="bg-orange-500 h-4 rounded-full"
                    style={{
                      width: `${item.progress}%`,
                    }}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}