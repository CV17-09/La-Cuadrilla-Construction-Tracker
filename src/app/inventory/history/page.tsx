export default function TransactionHistoryPage() {
  const transactions = [
    {
      id: 1,
      material: "Steel Beams",
      type: "Stock In",
      quantity: 50,
      user: "Manager",
      jobSite: "Downtown Site",
      date: "04/18/2026",
      notes: "New delivery received",
    },
    {
      id: 2,
      material: "Concrete Bags",
      type: "Stock Out",
      quantity: 20,
      user: "Crew Member",
      jobSite: "Warehouse A",
      date: "04/19/2026",
      notes: "Used for foundation work",
    },
    {
      id: 3,
      material: "Safety Helmets",
      type: "Stock Out",
      quantity: 5,
      user: "Supervisor",
      jobSite: "North Project",
      date: "04/20/2026",
      notes: "Assigned to new workers",
    },
    {
      id: 4,
      material: "Electrical Wire",
      type: "Stock In",
      quantity: 30,
      user: "Manager",
      jobSite: "South Project",
      date: "04/21/2026",
      notes: "Restocked for installation",
    },
    {
      id: 5,
      material: "Paint Buckets",
      type: "Stock Out",
      quantity: 8,
      user: "Crew Member",
      jobSite: "East Site",
      date: "04/22/2026",
      notes: "Used for interior work",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📜 Transaction History
        </h1>

        <p className="text-gray-600 mb-8">
          View all stock movement activity across job sites.
        </p>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-50">
              <tr>
                <th className="text-left p-5">Material</th>
                <th className="text-left p-5">Type</th>
                <th className="text-left p-5">Quantity</th>
                <th className="text-left p-5">User</th>
                <th className="text-left p-5">Job Site</th>
                <th className="text-left p-5">Date</th>
                <th className="text-left p-5">Notes</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-semibold">
                    {transaction.material}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        transaction.type === "Stock In"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>

                  <td className="p-5 font-medium">
                    {transaction.type === "Stock In" ? "+" : "-"}
                    {transaction.quantity}
                  </td>

                  <td className="p-5">{transaction.user}</td>

                  <td className="p-5">{transaction.jobSite}</td>

                  <td className="p-5">{transaction.date}</td>

                  <td className="p-5 text-gray-600">
                    {transaction.notes}
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