"use client";

import Link from "next/link";
import logo from "../public/images/TalkHaven.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(""); // Track which menu is open
  const [menuTimeout, setMenuTimeout] = useState(null); // Track timeout ID

  const handleMouseEnter = (menu) => {
    clearTimeout(menuTimeout); // Clear any existing timeout
    setOpenMenu(menu); // Open the current menu
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenMenu(""), 300); // Delay hiding the menu
    setMenuTimeout(timeout); // Save the timeout ID
  };

  return (
    <header className="max-w-7xl mx-auto container">
      {/* Nav Container */}
      <nav className="flex justify-between items-center py-6">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={logo} width={100} height={100} priority={true} alt="logo" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-10 relative">
          {/* About Us */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              className="hover:underline hover:decoration-solid hover:text-[#ffcc00] flex items-center space-x-2 text-lg font-medium"
            >
              About Us <ChevronDown className="w-5 h-5" />
            </Link>
            {openMenu === "about" && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-80 p-6 z-10 flex-col">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about/history"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Our History
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Learn more about how we started.</p>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Our Team
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Meet the people behind our mission.</p>
                  </li>
                  <li>
                    <Link
                      href="/about/mission"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Our Mission
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Discover what drives our goals.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              className="hover:underline hover:decoration-solid hover:text-[#ffcc00] flex items-center space-x-2 text-lg font-medium"
            >
              Services <ChevronDown className="w-5 h-5" />
            </Link>
            {openMenu === "services" && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-80 p-6 z-10 flex-col">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/services/consulting"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Consulting
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Expert advice tailored for your needs.</p>
                  </li>
                  <li>
                    <Link
                      href="/services/support"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Support
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">24/7 assistance to keep you running.</p>
                  </li>
                  <li>
                    <Link
                      href="/services/training"
                      className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                    >
                      Training
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Learn and grow with our experts.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00] text-lg font-medium">
            Price
          </Link>
          <Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00] text-lg font-medium">
            Contact Us
          </Link>
        </div>

        {/* Actions */}
        <div className="flex space-x-6 items-center">
          <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black">
            <Link href="/">Get Started</Link>
          </div>
          <div>Dark/Light</div>
        </div>
      </nav>
    </header>
  );
}
