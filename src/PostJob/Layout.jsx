import Navbar from "@/components/navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[693px] container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}
