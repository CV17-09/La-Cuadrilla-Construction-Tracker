"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMaterialPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    supplierId: "",
    unitId: "",
    costPerUnit: "",
    quantity: "",
    minThreshold: "",
    location: "",
    projectSite: "",
    manufacturer: "",
    weight: "",
    batchNumber: "",
    receivedDate: "",
    status: "",
    qrCode: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
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
        "Content-Type":"application/json",
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

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          ➕ Add Material
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Add a new construction material.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl border border-gray-300 p-8 space-y-5"
        >

          <input
            name="name"
            placeholder="Material Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="description"
            placeholder="Material Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="categoryId"
            placeholder="Category"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="supplierId"
            placeholder="Supplier"
            value={formData.supplierId}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Current Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            type="number"
            name="costPerUnit"
            placeholder="Cost Per Unit"
            value={formData.costPerUnit}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="location"
            placeholder="Storage Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="projectSite"
            placeholder="Project Site"
            value={formData.projectSite}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="manufacturer"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            name="batchNumber"
            placeholder="Batch Number"
            value={formData.batchNumber}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <input
            type="date"
            name="receivedDate"
            value={formData.receivedDate}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          >
            <option value="">Select Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Critical</option>
          </select>

          <input
            name="qrCode"
            placeholder="QR Code"
            value={formData.qrCode}
            onChange={handleChange}
            className="w-full border-2 rounded-2xl px-5 py-4 text-black"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold"
          >
            Save Material
          </button>

        </form>

      </div>

    </main>
  );
}