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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    alert("Material saved successfully!");
    router.push("/materials");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ➕ Add Material
        </h1>

        <p className="text-gray-600 mb-8">
          Add a new construction material to the inventory system.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Material Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="categoryId"
            type="text"
            placeholder="Category ID"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="supplierId"
            type="text"
            placeholder="Supplier ID"
            value={formData.supplierId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="unitId"
            type="number"
            placeholder="Unit ID"
            value={formData.unitId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="costPerUnit"
            type="number"
            placeholder="Cost Per Unit"
            value={formData.costPerUnit}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="minThreshold"
            type="number"
            placeholder="Minimum Threshold"
            value={formData.minThreshold}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <input
            name="qrCode"
            type="text"
            placeholder="QR Code"
            value={formData.qrCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg"
          >
            Save Material
          </button>
        </form>
      </div>
    </main>
  );
}