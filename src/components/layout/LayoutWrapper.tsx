"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login" || pathname === "/register";

  if (hideLayout) {
    return <>{children}</>;
  }

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
    <div className="min-h-screen bg-gray-100 text-gray-900 flex">
      <aside className="w-72 bg-white border-r border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-12">
          🚧 La-Cuadrilla
        </h1>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
                pathname === item.href
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Construction Inventory System
            </h2>
            <p className="text-gray-500">
              Real-time tracking and project management
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/profile/notifications"
              className="relative bg-gray-100 hover:bg-gray-200 p-3 rounded-2xl"
            >
              🔔
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </Link>

            <Link
              href="/profile/settings"
              className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-2xl"
            >
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                C
              </div>

              <div>
                <p className="font-bold text-gray-900">Claudia</p>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
            </Link>
          </div>
        </header>

        <main className="bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}