export default function JobSitesPage() {
  const jobSites = [
    { id: 1, name: "Downtown Site", location: "Houston, TX", status: "Active" },
    { id: 2, name: "North Project", location: "Spring, TX", status: "Active" },
    { id: 3, name: "Warehouse Expansion", location: "Katy, TX", status: "Planning" },
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
            <div key={site.id} className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {site.name}
              </h2>

              <p className="text-gray-600 mb-4">{site.location}</p>

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
                {site.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}