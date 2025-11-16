import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">

      {/* About Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of software innovation with expertise in AI, physics simulations, and cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {SITE_CONFIG.mission}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our team of expert engineers and researchers combines deep technical knowledge with creative problem-solving to deliver software that not only meets today's needs but anticipates tomorrow's challenges.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo-ai.png"
              alt="Forgeora Mission"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Constantly exploring new technologies and methodologies to stay ahead of the curve.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Precision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering accurate, reliable solutions that meet the highest standards of quality.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Working closely with clients to understand their needs and deliver tailored solutions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
