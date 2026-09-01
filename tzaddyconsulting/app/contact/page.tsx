"use client";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Every good engagement starts with a real conversation. Tell us what you&apos;re dealing with, and we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Here&apos;s what helps us respond well to your first message:
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: "👤",
                  title: "Your Name & Business Name",
                  description:
                    "Help us personalize our response and understand who we&apos;re speaking with.",
                },
                {
                  icon: "🎯",
                  title: "What Are You Trying to Solve",
                  description:
                    "Whether it is a strategic question, a project need, or a specific challenge.",
                },
                {
                  icon: "⏰",
                  title: "Urgency & Deadline",
                  description:
                    "Let us know how urgent it is and any deadlines you&apos;re working against.",
                },
                {
                  icon: "📱",
                  title: "Best Way to Reach You",
                  description:
                    "Provide your preferred contact method so we can get back to you quickly.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-4xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mt-8 italic">
              The more we know upfront, the faster we can give you a useful response.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Speak to Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Phone
              </h3>
              <a
                href="tel:+2349095509872"
                className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold hover:text-yellow-700 dark:hover:text-yellow-300"
              >
                +234 909 550 9872
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Call us directly for immediate assistance.
              </p>
            </div>

            {/* Email & WhatsApp */}
            <div className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Message
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/2349095509872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:text-yellow-700 dark:hover:text-yellow-300"
                >
                  WhatsApp →
                </a>
                <a
                  href="mailto:consultant@tzaddyconsulting.com"
                  className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:text-yellow-700 dark:hover:text-yellow-300"
                >
                  Email →
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Office Hours
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              <span className="font-semibold text-gray-900 dark:text-white">
                Monday to Friday
              </span>
              , 9am to 5pm
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              We respond to messages received outside these hours on the next working day.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Find Us Online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/naijabiz_fixer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instagram
              </h3>
              <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                @naijabiz_fixer
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/tzaddyy-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800"
            >
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                Tzaddy Consulting
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Reach out to us through any of the channels above. We&apos;re here to help and excited to hear about your project.
          </p>
          <a
            href="https://wa.me/2349095509872"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:shadow-lg transition-shadow font-semibold"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
