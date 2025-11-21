import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { CONTACT_INFO } from "@/constants/contact";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Background with Logo */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/logo-white.png"
          alt="Background Logo"
          fill
          className="object-cover"
        />
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo-white.png"
                alt={`${SITE_CONFIG.name} Logo`}
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              {SITE_CONFIG.description}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-blue-400" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.github}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-gray-300" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl text-blue-300" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl text-pink-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Email</span>
                {CONTACT_INFO.email}
              </p>
              <p className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Phone</span>
                {CONTACT_INFO.phone}
              </p>
              <p className="text-gray-300">
                <span className="block text-sm text-gray-400 mb-1">Address</span>
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.street} 
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{SITE_CONFIG.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
