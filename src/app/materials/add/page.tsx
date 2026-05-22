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
    quantity: "",
    costPerUnit: "",
    minThreshold: "",
    location: "",
    projectSite: "",
    manufacturer: "",
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error(errorData);

      alert(
        errorData.error ||
        "Failed to save material"
      );

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
          Add a new construction material.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >

          <input
            name="name"
            placeholder="Material Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
            required
          />

          <input
            name="description"
            placeholder="Material Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
            required
          >
            <option value="">
              Select Category
            </option>

            <option value="1">
              Structural Materials
            </option>

            <option value="2">
              Safety Equipment
            </option>

            <option value="3">
              Electrical
            </option>

            <option value="4">
              Plumbing
            </option>

          </select>


          <select
            name="supplierId"
            value={formData.supplierId}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
            required
          >
            <option value="">
              Select Supplier
            </option>

            <option value="1">
              ABC Steel
            </option>

            <option value="2">
              BuildPro
            </option>

            <option value="3">
              SafeGear
            </option>

          </select>


          <select
            name="unitId"
            value={formData.unitId}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
            required
          >
            <option value="">
              Select Unit
            </option>

            <option value="1">
              Pieces
            </option>

            <option value="2">
              Bags
            </option>

            <option value="3">
              Boxes
            </option>

            <option value="4">
              Rolls
            </option>

          </select>


          <input
            type="number"
            name="quantity"
            placeholder="Current Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            type="number"
            name="costPerUnit"
            placeholder="Cost Per Unit"
            value={formData.costPerUnit}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            type="number"
            name="minThreshold"
            placeholder="Minimum Threshold"
            value={formData.minThreshold}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="location"
            placeholder="Storage Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="projectSite"
            placeholder="Project Site"
            value={formData.projectSite}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="manufacturer"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
          />

          <input
            name="qrCode"
            placeholder="QR Code"
            value={formData.qrCode}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 text-black"
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