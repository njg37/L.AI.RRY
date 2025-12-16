import React from "react";

import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
  const currentYear = new Date().getFullYear();
const socialLinks = [
  { name: "X", Icon: FaTwitter, color: "hover:bg-slate-700" },
  { name: "LinkedIn", Icon: FaLinkedin, color: "hover:bg-blue-700" },
  { name: "Instagram", Icon: FaInstagram, color: "hover:bg-pink-600" },
  { name: "YouTube", Icon: FaYoutube, color: "hover:bg-red-600" },
];


  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 font-sans ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="../../public/images/logo.png" alt="L.AI.RRY Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold tracking-tight">L.AI.RRY</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            AI-driven mock tests for competitive exams. Empowering your journey with precision analysis.
          </p>

          <div className="flex space-x-4 pt-2">
            {socialLinks.map(({ name, Icon, color }) => (
              <a
                key={name}
                href="#"
                className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center ${color} transition-all duration-300 group`}
              >
                <span className="sr-only">{name}</span>
                <Icon size={18} className="text-slate-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Exams */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-yellow-400 pl-3">Exams</h3>
          <ul className="space-y-3 text-slate-400">
            {["UPSC Prep", "SBI PO", "Railways"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-blue-500 pl-3">Links</h3>
          <ul className="space-y-3 text-slate-400">
            {["Pricing", "FAQ", "Rankings"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Updates */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Updates</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white">
              <HiOutlineMail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex justify-between text-sm text-slate-500">
        <p>© {currentYear} L.AI.RRY.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
