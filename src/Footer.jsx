import React from "react";
import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
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
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Dashboard
                </a>
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
                href="https://mail.google.com/"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} EmailValidator. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
