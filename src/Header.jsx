import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-black shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4">
          <Mail className="text-yellow-400" />
          <span className="text-2xl font-bold text-white">Email Validator</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`text-md font-medium transition-colors ${
              location.pathname === "/"
                ? "text-yellow-400"
                : "text-white hover:text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`text-md font-medium transition-colors ${
              location.pathname === "/dashboard"
                ? "text-yellow-400"
                : "text-white hover:text-gray-300"
            }`}
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
