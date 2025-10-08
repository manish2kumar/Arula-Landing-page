import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#3E2F84] text-white py-8">
      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ARULA for Autism</h2>
          <p className="text-gray-200 text-sm">
            The Ultimate Therapy Solution for Children on Autism Spectrum Disorder (ASD)
          </p>

          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="#" className="hover:text-pink-400 transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors duration-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors duration-200">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-pink-400 transition-colors duration-200 cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <span className="text-gray-300 cursor-not-allowed">Courses</span>
            </li>
            <li>
              <span className="text-gray-300 cursor-not-allowed">Success Stories</span>
            </li>
            <li>
              <span className="text-gray-300 cursor-not-allowed">Terms & Conditions</span>
            </li>
            <li>
              <span className="text-gray-300 cursor-not-allowed">Refund Policy</span>
            </li>
            <li>
              <span className="text-gray-300 cursor-not-allowed">Privacy Policy</span>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-pink-400 transition-colors duration-200 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm">
            Mayuri Ramdasi Hearing and Speech Solutions Pvt Ltd,<br />
            705, Gauri Complex, Sector 11, CBD Belapur, <br />
            Navi Mumbai, Maharashtra 400614.
          </p>
          <p className="mt-2 text-gray-200 text-sm">
            Email: <a href="mailto:info@arulaforautism.com" className="hover:text-pink-400">info@arulaforautism.com</a>
          </p>
          <p className="text-gray-200 text-sm">
            Phone: <a href="tel:+918452057870" className="hover:text-pink-400">+91 84520 57870</a>
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-white/20 pt-4 text-center text-gray-300 text-sm">
        © 2025 - ARULA for Autism. All rights reserved.
      </div>
    </footer>
  );
}
