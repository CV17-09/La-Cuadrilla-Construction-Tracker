export default function JobSitesPage() {
  const jobSites = [
    {
      id: 1,
      name: "Downtown Site",
      location: "Houston, TX",
      manager: "John Smith",
      workers: 32,
      materials: 124,
      completion: 75,
      budget: "$450,000",
      startDate: "04/01/2026",
      status: "Active",
    },
    {
      id: 2,
      name: "North Project",
      location: "Spring, TX",
      manager: "Maria Lopez",
      workers: 18,
      materials: 67,
      completion: 45,
      budget: "$280,000",
      startDate: "04/08/2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Warehouse Expansion",
      location: "Katy, TX",
      manager: "David Johnson",
      workers: 10,
      materials: 30,
      completion: 10,
      budget: "$600,000",
      startDate: "05/01/2026",
      status: "Planning",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🏗️ Job Sites
        </h1>

        <p className="text-gray-600 mb-8">
          Manage construction projects and material locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {jobSites.map((site) => (

            <div
              key={site.id}
              className="bg-white rounded-3xl shadow-xl p-6"
            >

              <div className="flex justify-between mb-4">

                <h2 className="text-2xl font-bold text-gray-900">
                  {site.name}
                </h2>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  ${
                    site.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {site.status}
                </span>

              </div>


              <div className="space-y-3 text-gray-700">

                <p>
                  📍 {site.location}
                </p>

                <p>
                  👤 Manager: {site.manager}
                </p>

                <p>
                  👷 Workers: {site.workers}
                </p>

                <p>
                  📦 Materials: {site.materials}
                </p>

                <p>
                  💰 Budget: {site.budget}
                </p>

                <p>
                  📅 Started: {site.startDate}
                </p>

              </div>


              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Project Completion
                  </span>

                  <span className="font-bold text-gray-900">
                    {site.completion}%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div
                    className="bg-orange-500 h-4 rounded-full"
                    style={{
                      width: `${site.completion}%`
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