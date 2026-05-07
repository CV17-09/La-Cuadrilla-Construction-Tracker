import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "La-Cuadrilla Construction Tracker",
  description: "Construction material tracking system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <Header />

            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}