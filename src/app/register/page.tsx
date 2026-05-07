export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          👷 Create Account
        </h1>

        <p className="text-gray-600 mb-8">
          Register a new worker or project manager account.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <select className="w-full border border-gray-300 rounded-2xl px-4 py-3">
            <option>Select Role</option>
            <option>Worker</option>
            <option>Supervisor</option>
            <option>Project Manager</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg">
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}