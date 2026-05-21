"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Pages that should NOT show dashboard layout
  const hideLayoutRoutes = ["/login", "/register"];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}