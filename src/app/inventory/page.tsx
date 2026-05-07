export default function InventoryPage() {
  const inventory = [
    {
      id: 1,
      material: "Steel Beams",
      quantity: 124,
      location: "Downtown Site",
    },
    {
      id: 2,
      material: "Concrete Bags",
      quantity: 52,
      location: "Warehouse A",
    },
    {
      id: 3,
      material: "Safety Helmets",
      quantity: 18,
      location: "North Project",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📊 Inventory
        </h1>

        <p className="text-gray-600 mb-8">
          Monitor current inventory across all construction projects.
        </p>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-50">
              <tr>
                <th className="text-left p-5">Material</th>
                <th className="text-left p-5">Quantity</th>
                <th className="text-left p-5">Location</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-5 font-semibold">
                    {item.material}
                  </td>

                  <td className="p-5">
                    {item.quantity}
                  </td>

                  <td className="p-5">
                    {item.location}
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