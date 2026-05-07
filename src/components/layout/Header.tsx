export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Construction Inventory System
          </h1>

          <p className="text-gray-500">
            Real-time tracking and project management
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative bg-gray-100 hover:bg-gray-200 transition p-3 rounded-2xl">
            🔔

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              C
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Claudia
              </p>

              <p className="text-sm text-gray-500">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}