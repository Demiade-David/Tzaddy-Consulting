"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
  ];

  return (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/IMG-20260814-WA0110.jpg.jpeg"
              alt="Tzaddy Consulting Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Tzaddy Consulting
            </span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-linear-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:shadow-lg transition-shadow font-medium"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-1 px-3 py-2 bg-linear-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:shadow-lg transition-shadow font-medium text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
