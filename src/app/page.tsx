"use client"
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGlobe, FaServer, FaMobileAlt, FaCloud, FaRocket, FaDatabase, FaSearch, FaCode, FaBrain, FaCogs, FaUsers, FaProjectDiagram, FaAward, FaLightbulb, FaPencilRuler, FaCodeBranch, FaBug, FaRocket as FaLaunch, FaRedo, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaJs, FaHtml5, FaCss3, FaDatabase as FaDb, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaAppStore } from "react-icons/fa6";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <FaProjectDiagram className="text-4xl text-blue-600" />, value: 150, label: "Projects Completed" },
    { icon: <FaUsers className="text-4xl text-green-600" />, value: 50, label: "Happy Clients" },
    { icon: <FaAward className="text-4xl text-purple-600" />, value: 10, label: "Years Experience" },
  ];

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

  const technologies = [
    { icon: <FaReact className="text-4xl text-blue-500" />, name: "React", category: "Frontend" },
    { icon: <FaNodeJs className="text-4xl text-green-500" />, name: "Node.js", category: "Backend" },
    { icon: <FaPython className="text-4xl text-yellow-500" />, name: "Python", category: "Backend" },
    { icon: <FaAws className="text-4xl text-orange-500" />, name: "AWS", category: "Cloud" },
    { icon: <FaDocker className="text-4xl text-blue-600" />, name: "Docker", category: "DevOps" },
    { icon: <FaGitAlt className="text-4xl text-red-500" />, name: "Git", category: "Version Control" },
    { icon: <FaJs className="text-4xl text-yellow-400" />, name: "JavaScript", category: "Frontend" },
    { icon: <FaHtml5 className="text-4xl text-orange-600" />, name: "HTML5", category: "Frontend" },
    { icon: <FaCss3 className="text-4xl text-blue-400" />, name: "CSS3", category: "Frontend" },
    { icon: <FaDb className="text-4xl text-green-600" />, name: "MongoDB", category: "Database" },
    { icon: <FaLinux className="text-4xl text-gray-600" />, name: "Linux", category: "OS" },
    { icon: <FaAppStore className="text-4xl text-gray-800" />, name: "iOS", category: "Mobile" },
    { icon: <FaAndroid className="text-4xl text-green-400" />, name: "Android", category: "Mobile" },
    { icon: <FaDatabase className="text-4xl text-blue-700" />, name: "PostgreSQL", category: "Database" }
  ];

  const featuredProjects = [
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
    }
  ];

  const agileSteps = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Planning",
      description: "We gather requirements, analyze your needs, and create a comprehensive project roadmap."
    },
    {
      icon: <FaPencilRuler className="text-4xl text-blue-500" />,
      title: "Design",
      description: "Our designers create wireframes, mockups, and prototypes to visualize the solution."
    },
    {
      icon: <FaCodeBranch className="text-4xl text-green-500" />,
      title: "Development",
      description: "Agile sprints deliver working software incrementally with regular feedback loops."
    },
    {
      icon: <FaBug className="text-4xl text-red-500" />,
      title: "Testing",
      description: "Rigorous testing ensures quality, performance, and security at every stage."
    },
    {
      icon: <FaLaunch className="text-4xl text-purple-500" />,
      title: "Deployment",
      description: "Seamless deployment with continuous integration and monitoring."
    },
    {
      icon: <FaRedo className="text-4xl text-indigo-500" />,
      title: "Iteration",
      description: "Continuous improvement based on user feedback and evolving requirements."
    }
  ];

  const testimonials = [
    {
      name: "John Geronimo",
      company: "TechCorp",
      message: "Forgeora transformed our operations with their comprehensive software solutions. Highly recommend!",
      avatar: "/john-geronimo.jpg"
    },
    {
      name: "Kadam Sone",
      company: "InnovateLabs",
      message: "The full-stack development and cloud deployment services were exceptional for our research platform.",
      avatar: "/kadam-sone.jpg"
    },
    {
      name: "Mike Johnson",
      company: "DataDriven",
      message: "Outstanding service and cutting-edge technology. Our productivity increased by 40%.",
      avatar: "/mike-johnson.jpg"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative Software Solutions
          </motion.h1>
          <motion.div
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                SITE_CONFIG.tagline,
                2000,
                'Transforming Ideas into Reality',
                2000,
                'Empowering Your Digital Future',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
              >
                <motion.div
                  className="text-6xl mb-4 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}+
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agile Process Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Our Agile Development Process</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We follow an iterative Agile methodology to deliver high-quality software solutions efficiently and adaptively.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agileSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 + index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                  <motion.div
                    className="mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                </div>
                {index < agileSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 3.0 + index * 0.1 }}
                  >
                    <FaRocket className="text-2xl text-blue-600" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Technologies We Work With</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 3.6 + index * 0.05 }}
              >
                <motion.div
                  className="mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.4 + index * 0.1 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
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
          transition={{ duration: 0.8, delay: 5.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentTestimonial * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-6"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.message}&rdquo;</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              {SITE_CONFIG.contactIntro}
            </motion.p>
          </div>
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 4.0 }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let&apos;s Build Something Amazing</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ready to transform your ideas into reality? Let&apos;s discuss how Forgeora can help bring your vision to life.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover our innovative solutions that have transformed businesses and pushed the boundaries of technology.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 6.4 + index * 0.1 }}
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

                  <div className="flex flex-wrap gap-2">
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
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>

        {/* Pages Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 7.0 }}
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
