"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Materials", href: "/materials", icon: "📦" },
    { name: "Inventory", href: "/inventory", icon: "📜" },
    { name: "Requests", href: "/requests", icon: "📝" },
    { name: "Alerts", href: "/alerts", icon: "🚨" },
    { name: "QR Scanner", href: "/qr-scanner", icon: "📱" },
    { name: "Job Sites", href: "/job-sites", icon: "🏗️" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gray-900 text-white p-6 shadow-2xl">
      <h1 className="text-3xl font-extrabold text-orange-400 mb-10">
        🚧 La-Cuadrilla
      </h1>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-orange-600 text-white shadow-lg"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}