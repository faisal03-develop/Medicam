"use client";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3">
        <span className="text-gray-500">Welcome 👋</span>
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
