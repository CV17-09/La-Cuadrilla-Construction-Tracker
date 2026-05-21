"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary registration logic
    console.log("Account created");

    // Redirect to login after creating account
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center p-8">
      
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          👷 Create Account
        </h1>

        <p className="text-gray-600 mb-8">
          Register a new worker or project manager account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
          />

          <select
            className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          >
            <option value="">Select Role</option>
            <option>Worker</option>
            <option>Supervisor</option>
            <option>Project Manager</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white text-gray-900 placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg transition"
          >
            Create Account
          </button>

        </form>

        <div className="mt-6 text-center border-t border-gray-200 pt-5">
          <p className="text-gray-700">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="inline-block mt-3 bg-orange-100 text-orange-700 px-5 py-2 rounded-xl font-bold hover:bg-orange-200 transition"
          >
            Login
          </Link>
        </div>

      </div>
    </main>
  );
}