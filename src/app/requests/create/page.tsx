"use client";

import { useState } from "react";

export default function CreateRequestPage() {
  const [formData, setFormData] = useState({
    material: "",
    project: "",
    type: "",
    quantity: "",
    requester: "",
    date: "",
    location: "",
    priority: "",
    reason: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("New request submitted:", formData);

    setSuccessMessage("Request submitted successfully!");

    setFormData({
      material: "",
      project: "",
      type: "",
      quantity: "",
      requester: "",
      date: "",
      location: "",
      priority: "",
      reason: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ➕ Create Material Request
        </h1>

        <p className="text-gray-600 mb-8">
          Submit a request for materials needed at a job site.
        </p>

        {successMessage && (
          <div className="mb-6 bg-green-100 text-green-700 border border-green-300 rounded-2xl px-5 py-4 font-semibold">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >
          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          >
            <option value="">Select Material</option>
            <option value="Steel Beams">Steel Beams</option>
            <option value="Concrete Bags">Concrete Bags</option>
            <option value="Safety Helmets">Safety Helmets</option>
            <option value="Wood Planks">Wood Planks</option>
            <option value="Electrical Wire">Electrical Wire</option>
            <option value="PVC Pipes">PVC Pipes</option>
          </select>

          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          >
            <option value="">Select Project</option>
            <option value="Downtown Site">Downtown Site</option>
            <option value="North Project">North Project</option>
            <option value="Warehouse Expansion">Warehouse Expansion</option>
            <option value="South Project">South Project</option>
            <option value="East Site">East Site</option>
          </select>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          >
            <option value="">Request Type</option>
            <option value="Stock Out">Stock Out</option>
            <option value="Restock">Restock</option>
            <option value="Emergency Request">Emergency Request</option>
          </select>

          <input
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity Needed"
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
          />

          <input
            name="requester"
            type="text"
            value={formData.requester}
            onChange={handleChange}
            placeholder="Requested By"
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          />

          <input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="Delivery Location"
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900 placeholder:text-gray-500"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-900"
          >
            <option value="">Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>

          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for request"
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 min-h-32 text-gray-900 placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}