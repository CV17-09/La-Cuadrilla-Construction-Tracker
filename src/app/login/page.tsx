"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // Temporary login
    console.log(formData);

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center p-8">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">

        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center text-white text-3xl font-bold mb-4">
            LC
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            🔐 Login
          </h1>

          <p className="text-gray-700 mt-2 text-center">
            Access your construction tracking dashboard
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white text-black placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-white text-black placeholder:text-gray-500 border-2 border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg transition"
          >
            Sign In
          </button>
        </form>

      </div>
    </main>
  );
}