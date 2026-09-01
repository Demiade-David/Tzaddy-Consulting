import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Welcome to Tzaddy Consulting
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We deliver innovative solutions tailored to your business needs.
                  Transform your vision into reality with our expert team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:shadow-lg transition-shadow font-semibold text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    50+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    100%
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Client Satisfaction
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    24/7
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-2xl blur-3xl opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We bring expertise, creativity, and dedication to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our highly skilled professionals bring years of experience to deliver exceptional results.",
                icon: "🎯",
              },
              {
                title: "Custom Solutions",
                description:
                  "We tailor our services to meet your unique business requirements and goals.",
                icon: "⚙️",
              },
              {
                title: "Fast Delivery",
                description:
                  "We work efficiently without compromising on quality to meet your timelines.",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let&apos;s work together to achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-yellow-600 rounded-lg hover:shadow-lg transition-shadow font-semibold"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
