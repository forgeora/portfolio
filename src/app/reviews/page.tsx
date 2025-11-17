"use client"
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechCorp Industries",
      company: "TechCorp Industries",
      avatar: "/logo-ai.png",
      rating: 5,
      review: "Forgeora's AI analytics platform transformed our decision-making process. The predictive insights have helped us increase efficiency by 40% and reduce operational costs significantly. Their team's expertise in machine learning is unmatched.",
      project: "AI Analytics Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Engineering Director, GameDev Studios",
      company: "GameDev Studios",
      avatar: "/logo-physics.png",
      rating: 5,
      review: "The physics simulation engine Forgeora developed for our game is incredible. The accuracy and performance exceeded our expectations. Our players love the realistic physics, and it has set us apart from competitors.",
      project: "Physics Simulation Engine"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager, Manufacturing Plus",
      company: "Manufacturing Plus",
      avatar: "/logo-white.png",
      rating: 5,
      review: "Forgeora's ERP system streamlined our entire manufacturing process. The custom integrations and user-friendly interface have made our daily operations so much smoother. Highly recommend their services!",
      project: "ERP System"
    },
    {
      id: 4,
      name: "David Kim",
      position: "CEO, SmartCity Solutions",
      company: "SmartCity Solutions",
      avatar: "/logo-ai.png",
      rating: 5,
      review: "Working with Forgeora on our IoT platform was a game-changer. Their understanding of complex systems and ability to deliver scalable solutions is impressive. The platform is now managing thousands of sensors city-wide.",
      project: "IoT Smart City Platform"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Supply Chain Director, Global Foods",
      company: "Global Foods",
      avatar: "/logo-physics.png",
      rating: 5,
      review: "The blockchain supply chain tracker has brought unprecedented transparency to our operations. Our customers can now trace products from farm to table, building trust and ensuring food safety. Excellent work!",
      project: "Blockchain Supply Chain"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Training Manager, Industrial Safety Corp",
      company: "Industrial Safety Corp",
      avatar: "/logo-white.png",
      rating: 5,
      review: "Forgeora's AR/VR training platform has revolutionized our safety training programs. The immersive experience makes learning engaging and memorable. Our incident rates have dropped significantly since implementation.",
      project: "AR/VR Training Platform"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "98%" },
    { label: "Years Experience", value: "10+" },
    { label: "Team Members", value: "25+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Reviews Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client Reviews
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {SITE_CONFIG.reviewsIntro}
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{review.position}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{review.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Project: <span className="font-medium text-gray-700 dark:text-gray-300">{review.project}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Join Our Happy Clients
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
