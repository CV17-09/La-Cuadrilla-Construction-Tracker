"use client";

import { useState } from "react";

export default function RequestsPage() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      material: "Concrete Bags",
      quantity: 40,
      project: "Downtown Site",
      requester: "John Smith",
      date: "04/18/2026",
      status: "Pending",
      priority: "High",
      type: "Emergency",
      decisionComment: "",
    },
    {
      id: 2,
      material: "Safety Helmets",
      quantity: 15,
      project: "North Project",
      requester: "Maria Lopez",
      date: "04/19/2026",
      status: "Approved",
      priority: "Medium",
      type: "Stock Out",
      decisionComment: "Approved for safety compliance.",
    },
    {
      id: 3,
      material: "Steel Beams",
      quantity: 20,
      project: "Warehouse Expansion",
      requester: "David Johnson",
      date: "04/20/2026",
      status: "Completed",
      priority: "Low",
      type: "Stock In",
      decisionComment: "",
    },
    {
      id: 4,
      material: "PVC Pipes",
      quantity: 50,
      project: "South Site",
      requester: "Carlos Rivera",
      date: "04/21/2026",
      status: "Pending",
      priority: "High",
      type: "Stock Out",
      decisionComment: "",
    },
  ]);

  const [comments, setComments] = useState<{ [key:number]: string }>({});

  const handleCommentChange = (
    id:number,
    value:string
  ) => {
    setComments((prev)=>({
      ...prev,
      [id]: value,
    }));
  };

  const updateRequestStatus = (
    id:number,
    newStatus:string
  ) => {

    setRequests((prevRequests)=>
      prevRequests.map((request)=>
        request.id === id
          ? {
              ...request,
              status: newStatus,
              decisionComment:
                comments[id] || "No comment provided",
            }
          : request
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          📝 Material Requests
        </h1>

        <div className="space-y-6">

          {requests.map((request)=>(
            <div
              key={request.id}
              className="bg-white rounded-3xl p-6 shadow-xl"
            >

              <div className="flex justify-between">

                <div>
                  <h2 className="font-bold text-2xl">
                    {request.material}
                  </h2>

                  <p className="text-gray-500">
                    Requested by {request.requester}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full
                  ${
                    request.status==="Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : request.status==="Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
                >
                  {request.status}
                </span>

              </div>

              <div className="mt-4 text-gray-700">
                Quantity: {request.quantity}
              </div>

              <div className="mt-2 text-gray-700">
                Project: {request.project}
              </div>

              {request.status==="Pending" && (
                <div className="mt-6">

                  <textarea
                    placeholder="Why are you approving/rejecting?"
                    value={comments[request.id] || ""}
                    onChange={(e)=>
                      handleCommentChange(
                        request.id,
                        e.target.value
                      )
                    }
                    className="w-full border rounded-xl p-3"
                  />

                  <div className="mt-4 flex gap-3">

                    <button
                      onClick={()=>
                        updateRequestStatus(
                          request.id,
                          "Approved"
                        )
                      }
                      className="bg-green-500 text-white px-4 py-2 rounded-xl"
                    >
                      Approve
                    </button>

                    <button
                      onClick={()=>
                        updateRequestStatus(
                          request.id,
                          "Rejected"
                        )
                      }
                      className="bg-red-500 text-white px-4 py-2 rounded-xl"
                    >
                      Reject
                    </button>

                  </div>

                </div>
              )}

              {request.decisionComment && (
                <div className="mt-6 bg-gray-100 rounded-xl p-4">

                  <p className="font-bold">
                    Manager Comment:
                  </p>

                  <p>
                    {request.decisionComment}
                  </p>

                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}