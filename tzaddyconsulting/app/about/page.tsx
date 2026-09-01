export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Tzaddy Consulting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Dedicated to excellence and innovation since day one
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Tzaddy Consulting was founded with a simple mission: to help
                businesses succeed through innovative solutions and expert
                guidance. What started as a small team of passionate
                professionals has grown into a trusted partner for companies of
                all sizes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in building long-term relationships with our clients,
                understanding their unique challenges, and delivering solutions
                that drive real, measurable results. Our commitment to quality
                and excellence has made us a leader in our industry.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12">
                <div className="space-y-6">
                  <div className="text-4xl font-bold text-yellow-600">10+</div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Years of combined experience
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We operate with transparency and honesty in all our dealings.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, every single day.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new ideas and technologies to stay ahead of the curve.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and strong partnerships.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     
          </div>
       
        )
}
