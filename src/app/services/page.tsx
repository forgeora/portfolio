"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Services Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive software solutions powered by AI, physics simulations, and cutting-edge technology.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo-ai.png"
              alt="AI Solutions"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI & Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Develop intelligent systems that learn, adapt, and optimize processes. Our AI solutions include predictive analytics, natural language processing, and computer vision.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Automated Decision Making</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo-physics.png"
              alt="Physics Simulations"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Physics Simulations</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create accurate virtual environments for testing, training, and research. Perfect for engineering, gaming, and scientific applications.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Real-time Physics Engines</li>
              <li>• Fluid Dynamics</li>
              <li>• Structural Analysis</li>
              <li>• Virtual Reality Integration</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo-white.png"
              alt="Custom Software"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Custom Software Development</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build tailored software solutions that fit your unique business requirements. From web applications to enterprise systems.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• Enterprise Software</li>
              <li>• API Development</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Science & Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transform raw data into actionable insights. Our data science services help you make informed decisions and drive business growth.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Big Data Processing</li>
              <li>• Statistical Modeling</li>
              <li>• Data Visualization</li>
              <li>• Business Intelligence</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Scalable cloud infrastructure and applications. Migrate to the cloud or build cloud-native solutions for maximum efficiency.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Cloud Migration</li>
              <li>• Serverless Architecture</li>
              <li>• DevOps & CI/CD</li>
              <li>• Multi-cloud Strategies</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protect your digital assets with comprehensive security solutions. From threat detection to compliance management.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• Threat Detection</li>
              <li>• Encryption Solutions</li>
              <li>• Compliance Management</li>
              <li>• Security Audits</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
