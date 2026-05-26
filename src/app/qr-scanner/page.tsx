"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";

export default function QRScannerPage() {
  const [scannedCode, setScannedCode] = useState("");

  const recentScans = [
    {
      id: 1,
      material: "Steel Beams",
      code: "QR-STEEL-001",
      project: "Downtown Site",
      time: "10:45 AM",
      action: "Viewed",
    },
    {
      id: 2,
      material: "Concrete Bags",
      code: "QR-CONCRETE-002",
      project: "Warehouse A",
      time: "11:20 AM",
      action: "Stock Updated",
    },
    {
      id: 3,
      material: "Safety Helmets",
      code: "QR-HELMET-003",
      project: "North Project",
      time: "12:05 PM",
      action: "Checked Out",
    },
  ];

  function startScanner() {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        setScannedCode(decodedText);

        scanner.clear();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📱 QR Scanner
        </h1>

        <p className="text-gray-600 mb-8">
          Scan material QR codes to quickly view inventory.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <div className="border-4 border-dashed border-orange-300 rounded-3xl p-8 bg-orange-50">

              {!scannedCode && (
                <>
                  <div className="text-7xl mb-6">
                    📷
                  </div>

                  <h2 className="text-2xl font-bold mb-4">
                    Camera Scanner
                  </h2>

                  <button
                    onClick={startScanner}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold"
                  >
                    Start Scanner
                  </button>
                </>
              )}

              <div
                id="qr-reader"
                className="mt-6"
              />

              {scannedCode && (
                <div className="mt-6 bg-green-100 p-4 rounded-xl">
                  <h3 className="font-bold">
                    Scanned QR:
                  </h3>

                  <p>{scannedCode}</p>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}