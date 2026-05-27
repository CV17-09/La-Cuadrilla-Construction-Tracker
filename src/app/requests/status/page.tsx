"use client";

import { useState } from "react";

export default function RequestStatusPage() {
  const [statuses, setStatuses] = useState([
    {
      id: 1,
      request: "Concrete Bags",
      quantity: 40,
      project: "Downtown Site",
      requester: "John Smith",
      status: "Pending",
      priority: "High",
      date: "04/21/2026",
      delivery: "04/25/2026",
      progress: 25,
      decisionComment: "",
    },
    {
      id: 2,
      request: "Safety Helmets",
      quantity: 15,
      project: "North Project",
      requester: "Maria Lopez",
      status: "Approved",
      priority: "Medium",
      date: "04/22/2026",
      delivery: "04/26/2026",
      progress: 70,
      decisionComment: "Approved because safety equipment is required on site.",
    },
    {
      id: 3,
      request: "Steel Beams",
      quantity: 20,
      project: "Warehouse Expansion",
      requester: "David Johnson",
      status: "Completed",
      priority: "Low",
      date: "04/23/2026",
      delivery: "04/23/2026",
      progress: 100,
      decisionComment: "Request completed and materials delivered.",
    },
  ]);

  const [comments, setComments] = useState<{ [key: number]: string }>({});

  const handleCommentChange = (id: number, value: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const updateStatus = (id: number, newStatus: string) => {
    const comment = comments[id] || "";

    setStatuses((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
              progress:
                newStatus === "Approved"
                  ? 70
                  : newStatus === "Rejected"
                  ? 0
                  : item.progress,
              decisionComment: comment,
            }
          : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          ✅ Request Status
        </h1>

        <p className="text-gray-600 mb-8">
          View the current status of submitted requests.
        </p>

        <div className="space-y-6">
          {statuses.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.request}
                  </h2>
                  <p className="text-gray-500">Request #{item.id}</p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "Approved"
                      ? "bg-blue-100 text-blue-700"
                      : item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-gray-700">
                <div><strong>Quantity:</strong> {item.quantity}</div>
                <div><strong>Project:</strong> {item.project}</div>
                <div><strong>Requested By:</strong> {item.requester}</div>
                <div><strong>Priority:</strong> {item.priority}</div>
                <div><strong>Submitted:</strong> {item.date}</div>
                <div><strong>Delivery:</strong> {item.delivery}</div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-800">
                    {item.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${
                      item.status === "Rejected" ? "bg-red-500" : "bg-orange-500"
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

              {item.status === "Pending" && (
                <div className="mt-6">
                  <textarea
                    value={comments[item.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(item.id, e.target.value)
                    }
                    placeholder="Add a reason for approval or rejection..."
                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 min-h-28 text-gray-900 placeholder:text-gray-500"
                  />

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => updateStatus(item.id, "Approved")}
                      className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl"
                    >
                      ✅ Approve
                    </button>

                    <button
                      onClick={() => updateStatus(item.id, "Rejected")}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              )}

              {item.decisionComment && (
                <div className="mt-6 bg-gray-100 border border-gray-200 rounded-2xl p-4">
                  <p className="font-bold text-gray-800">Manager Comment:</p>
                  <p className="text-gray-700 mt-1">{item.decisionComment}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}