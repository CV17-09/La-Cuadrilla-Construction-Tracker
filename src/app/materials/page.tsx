"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMaterialPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    supplierId: "",
    unitId: "",
    costPerUnit: "",
    minThreshold: "",
    qrCode: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const response = await fetch("/api/materials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      alert("Failed to save material");
      return;
    }

    alert("Material saved!");
    router.push("/materials");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          ➕ Add Material
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Add a new construction material to inventory.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl border border-gray-300 p-8 space-y-5"
        >
          {[
            ["name", "Material Name", "text"],
            ["categoryId", "Category ID", "text"],
            ["supplierId", "Supplier ID", "text"],
            ["unitId", "Unit ID", "number"],
            ["costPerUnit", "Cost Per Unit", "number"],
            ["minThreshold", "Minimum Threshold", "number"],
            ["qrCode", "QR Code", "text"],
          ].map(([name, placeholder, type]) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="
                w-full
                bg-white
                text-black
                placeholder:text-gray-600
                border-2
                border-gray-300
                rounded-2xl
                px-5
                py-4
                focus:outline-none
                focus:border-orange-500
              "
              required
            />
          ))}

          <button
            type="submit"
            className="
              w-full
              bg-orange-600
              hover:bg-orange-700
              text-white
              py-4
              rounded-2xl
              font-bold
              shadow-lg
              transition
            "
          >
            Save Material
          </button>
        </form>
      </div>
    </main>
  );
}