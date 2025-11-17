"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      description: "A comprehensive analytics platform that uses machine learning to provide predictive insights for e-commerce businesses.",
      image: "/logo-ai.png",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      category: "AI & ML",
      status: "Completed"
    },
    {
      id: 2,
      title: "Physics Simulation Engine",
      description: "High-performance physics simulation engine for real-time gaming and scientific research applications.",
      image: "/logo-physics.png",
      technologies: ["C++", "OpenGL", "CUDA", "Python"],
      category: "Physics Simulation",
      status: "Completed"
    },
    {
      id: 3,
      title: "Enterprise Resource Planning System",
      description: "Custom ERP solution for manufacturing companies with integrated inventory management and reporting.",
      image: "/logo-white.png",
      technologies: ["Node.js", "React", "PostgreSQL", "Docker"],
      category: "Custom Software",
      status: "Completed"
    },
    {
      id: 4,
      title: "IoT Smart City Platform",
      description: "Comprehensive IoT platform for smart city infrastructure monitoring and management.",
      image: "/logo-ai.png",
      technologies: ["Python", "MQTT", "React", "MongoDB"],
      category: "IoT Solutions",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Blockchain Supply Chain Tracker",
      description: "Decentralized supply chain tracking system ensuring transparency and authenticity of goods.",
      image: "/logo-physics.png",
      technologies: ["Solidity", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      status: "Completed"
    },
    {
      id: 6,
      title: "AR/VR Training Platform",
      description: "Immersive training platform using AR/VR technology for industrial safety and skill development.",
      image: "/logo-white.png",
      technologies: ["Unity", "C#", "ARCore", "WebXR"],
      category: "AR/VR",
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Projects Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of innovative solutions that have transformed businesses and pushed the boundaries of technology.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
                </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Start Your Project
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
