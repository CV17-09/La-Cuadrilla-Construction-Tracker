export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🔐 Login
        </h1>

        <p className="text-gray-600 mb-8">
          Access your construction tracking dashboard.
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}