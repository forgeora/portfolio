import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Innovative Software Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {SITE_CONFIG.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/logo-ai.png"
              alt="AI Solutions"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced AI solutions to automate processes and gain insights from your data.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/logo-physics.png"
              alt="Physics Simulations"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Physics Simulations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accurate physics simulations for engineering, gaming, and scientific research.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/logo-white.png"
              alt="Custom Software"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Custom Software</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored software solutions designed to meet your specific business needs.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {SITE_CONFIG.contactIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ContactForm showContactInfo={false} />
            <div className="hidden md:block">
              <Image
                src="/logo-ai.png"
                alt="Contact Us"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Pages Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Explore Our Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/about" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">About Us</h3>
              <p className="text-gray-600 dark:text-gray-300">{SITE_CONFIG.aboutIntro}</p>
            </Link>
            <Link href="/services" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Services</h3>
              <p className="text-gray-600 dark:text-gray-300">Discover the range of services we offer to help your business grow.</p>
            </Link>
            <Link href="/projects" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Explore our portfolio of successful projects and innovative solutions.</p>
            </Link>
            <Link href="/reviews" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Client Reviews</h3>
              <p className="text-gray-600 dark:text-gray-300">Read testimonials from our satisfied clients and partners.</p>
            </Link>
            <Link href="/contact" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300">Get in touch with us to discuss your project or ask any questions.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
