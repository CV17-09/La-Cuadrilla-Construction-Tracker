export default function TransactionHistoryPage() {
  const transactions = [
    {
      id: 1,
      material: "Steel Beams",
      type: "Stock In",
      quantity: 50,
      user: "Manager",
      date: "04/18/2026",
    },
    {
      id: 2,
      material: "Concrete Bags",
      type: "Stock Out",
      quantity: 20,
      user: "Crew Member",
      date: "04/19/2026",
    },
    {
      id: 3,
      material: "Safety Helmets",
      type: "Stock Out",
      quantity: 5,
      user: "Supervisor",
      date: "04/20/2026",
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
                <th className="text-left p-5">Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t hover:bg-gray-50">
                  <td className="p-5 font-semibold">{transaction.material}</td>
                  <td className="p-5">{transaction.type}</td>
                  <td className="p-5">{transaction.quantity}</td>
                  <td className="p-5">{transaction.user}</td>
                  <td className="p-5">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}