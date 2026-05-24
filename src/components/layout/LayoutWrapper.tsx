"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(pathname);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <Header />

        <main className="flex-1 bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}