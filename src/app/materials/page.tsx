import Link from "next/link";

export default function MaterialsPage() {
  const materials = [
    {
      id: 1,
      name: "Steel Beams",
      quantity: 124,
      location: "Downtown Site",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Concrete Bags",
      quantity: 52,
      location: "Warehouse A",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Safety Helmets",
      quantity: 18,
      location: "North Project",
      status: "Critical",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              📦 Materials
            </h1>

            <p className="text-gray-600 mt-2">
              Manage construction inventory and stock levels.
            </p>
          </div>

          <Link href="/materials/add">
            <button className="mt-4 md:mt-0 bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-2xl font-semibold shadow-lg cursor-pointer">
              + Add Material
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-50">
              <tr>
                <th className="text-left p-5 text-gray-700">Material</th>
                <th className="text-left p-5 text-gray-700">Quantity</th>
                <th className="text-left p-5 text-gray-700">Location</th>
                <th className="text-left p-5 text-gray-700">Status</th>
              </tr>
            </thead>

            <tbody>
              {materials.map((material) => (
                <tr
                  key={material.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-semibold text-gray-900">
                    {material.name}
                  </td>

                  <td className="p-5 text-gray-700">
                    {material.quantity}
                  </td>

                  <td className="p-5 text-gray-700">
                    {material.location}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        material.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : material.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {material.status}
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