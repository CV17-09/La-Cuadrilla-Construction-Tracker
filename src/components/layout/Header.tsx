"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Construction Inventory System
          </h1>

          <p className="text-gray-500">
            Real-time tracking and project management
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/profile/notifications"
            className="relative bg-gray-100 hover:bg-gray-200 transition p-3 rounded-2xl"
          >
            🔔
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-2xl transition"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                C
              </div>

              <div className="text-left">
                <p className="font-semibold text-gray-900">Claudia</p>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="font-bold text-gray-900">Claudia</p>
                  <p className="text-sm text-gray-500">Project Manager</p>
                </div>

                <Link
                  href="/profile/account"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                >
                  👤 View Account
                </Link>

                <Link
                  href="/profile/settings"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                >
                  ⚙️ Settings
                </Link>

                <Link
                  href="/profile/notifications"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                >
                  🔔 Notifications
                </Link>

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-red-600 hover:bg-red-50"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}