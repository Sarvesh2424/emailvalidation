import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                {location.pathname === "/dashboard" ? (
                  <Link
                    to="/"
                    className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Home
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Home
                  </a>
                )}
              </li>
              <li>
              {location.pathname === "/" ? (
                  <Link
                    to="/dashboard"
                    className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Dashboard
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Email_authentication"
                  className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Email_authentication"
                  className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/Sarvesh2424"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/sarvesh.24_/"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-p-b09979283/"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Email Validator. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
