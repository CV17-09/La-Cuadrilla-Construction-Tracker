export default function InventoryPage() {
  const inventory = [
    {
      id: 1,
      material: "Steel Beams",
      quantity: 124,
      unit: "Pieces",
      location: "Downtown Site",
      supplier: "ABC Steel",
    },
    {
      id: 2,
      material: "Concrete Bags",
      quantity: 52,
      unit: "Bags",
      location: "Warehouse A",
      supplier: "BuildPro",
    },
    {
      id: 3,
      material: "Safety Helmets",
      quantity: 18,
      unit: "Units",
      location: "North Project",
      supplier: "SafeGear",
    },
    {
      id: 4,
      material: "Wood Planks",
      quantity: 86,
      unit: "Pieces",
      location: "East Site",
      supplier: "Lumber Supply",
    },
    {
      id: 5,
      material: "Paint Buckets",
      quantity: 33,
      unit: "Buckets",
      location: "Warehouse B",
      supplier: "ColorMax",
    },
    {
      id: 6,
      material: "Electrical Wire",
      quantity: 15,
      unit: "Rolls",
      location: "South Project",
      supplier: "WireTech",
    },
    {
      id: 7,
      material: "PVC Pipes",
      quantity: 67,
      unit: "Pieces",
      location: "Downtown Site",
      supplier: "PipeWorks",
    },
    {
      id: 8,
      material: "Nails Boxes",
      quantity: 110,
      unit: "Boxes",
      location: "Warehouse A",
      supplier: "FastBuild",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Inventory
          </h1>

          <p className="text-gray-700 text-lg">
            Monitor current inventory across all construction projects.
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
                  Unit
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Location
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Supplier
                </th>

                <th className="text-left p-5 text-gray-900 font-bold">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>
              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 text-gray-900 font-semibold">
                    {item.material}
                  </td>

                  <td className="p-5 text-gray-800">
                    {item.quantity}
                  </td>

                  <td className="p-5 text-gray-800">
                    {item.unit}
                  </td>

                  <td className="p-5 text-gray-800">
                    {item.location}
                  </td>

                  <td className="p-5 text-gray-800">
                    {item.supplier}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.quantity > 100
                          ? "bg-green-100 text-green-700"
                          : item.quantity > 25
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.quantity > 100
                        ? "In Stock"
                        : item.quantity > 25
                        ? "Low Stock"
                        : "Critical"}
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