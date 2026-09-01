import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Tzaddy
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building exceptional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; 2024 Tzaddy Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
