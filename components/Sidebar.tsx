"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, LogOut, User } from "lucide-react";

const menus = [
  { label: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
  { label: "Book Appointment", href: "/dashboard/patient/bookappointment", icon: <Calendar size={18} /> },
  { label: "Profile", href: "/profile", icon: <User size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-6">HealthCare</h1>

      <nav className="space-y-4">
        {menus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-2 rounded-lg transition ${
              pathname === item.href ? "bg-blue-600" : "hover:bg-gray-800"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={logout}
        className="mt-10 flex items-center gap-3 p-2 rounded-lg hover:bg-red-600 w-full"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
