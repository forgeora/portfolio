"use client"
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { motion } from "framer-motion";
import { FaGlobe, FaServer, FaMobileAlt, FaCloud, FaRocket, FaDatabase, FaSearch, FaCode, FaBrain, FaCogs } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      icon: <FaGlobe className="text-4xl text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript."
    },
    {
      icon: <FaServer className="text-4xl text-green-600" />,
      title: "Server Development",
      description: "Robust backend solutions with Node.js, Python, and scalable architectures for high-performance applications."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-purple-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter."
    },
    {
      icon: <FaCloud className="text-4xl text-orange-600" />,
      title: "Cloud Services & Deployment",
      description: "Seamless cloud deployment on AWS, Azure, and GCP with CI/CD pipelines and auto-scaling solutions."
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: "Database Management",
      description: "Expert database design, optimization, and management for SQL and NoSQL databases."
    },
    {
      icon: <FaSearch className="text-4xl text-indigo-600" />,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies and digital marketing solutions to boost your online presence."
    }
  ];

  const features = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business needs."
    },
    {
      icon: <FaBrain className="text-3xl text-purple-500" />,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions to automate processes and gain insights from your data."
    },
    {
      icon: <FaCogs className="text-3xl text-green-500" />,
      title: "Physics Simulations",
      description: "Accurate physics simulations for engineering, gaming, and scientific research."
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      company: "TechCorp",
      message: "Forgeora transformed our operations with their comprehensive software solutions. Highly recommend!",
      avatar: "/logo-ai.png"
    },
    {
      name: "Jane Smith",
      company: "InnovateLabs",
      message: "The full-stack development and cloud deployment services were exceptional for our research platform.",
      avatar: "/logo-physics.png"
    },
    {
      name: "Mike Johnson",
      company: "DataDriven",
      message: "Outstanding service and cutting-edge technology. Our productivity increased by 40%.",
      avatar: "/logo-ai.png"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {SITE_CONFIG.tagline}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.message}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {SITE_CONFIG.contactIntro}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ready to transform your ideas into reality? Let&apos;s discuss how Forgeora can help bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Pages Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Explore Our Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/about" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">About Us</h3>
                <p className="text-gray-600 dark:text-gray-300">{SITE_CONFIG.aboutIntro}</p>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/services" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Services</h3>
                <p className="text-gray-600 dark:text-gray-300">Discover the range of services we offer to help your business grow.</p>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/projects" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">Explore our portfolio of successful projects and innovative solutions.</p>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/reviews" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Client Reviews</h3>
                <p className="text-gray-600 dark:text-gray-300">Read testimonials from our satisfied clients and partners.</p>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/contact" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                <p className="text-gray-600 dark:text-gray-300">Get in touch with us to discuss your project or ask any questions.</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
