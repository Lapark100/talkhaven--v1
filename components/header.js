"use client";

import Link from "next/link";
import logo from "../public/images/TalkHaven.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import DarkMode from "./dark-mode";

export default function Header() {
  const theme = useServerDarkMode();
  const [openMenu, setOpenMenu] = useState(""); // Track which menu is open
  const menuTimeout = useRef(null); // Ref for timeout to avoid re-renders
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // Monitor scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => setOpenMenu(""), 300);
  };

  const linkHoverClass =
    "hover:underline hover:decoration-solid hover:text-[#ffcc00]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto container flex justify-between items-center py-4 ${
          isScrolled ? "text-black" : "text-black dark:text-white"
        }`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              priority={true}
              alt="TalkHaven logo"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-10 relative">
          {/* About Us */}
          <Dropdown
            label="About Us"
            open={openMenu === "about"}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
            links={[
              {
                href: "/about/history",
                title: "Our History",
                desc: "Learn more about how we started.",
              },
              {
                href: "/about/team",
                title: "Our Team",
                desc: "Meet the people behind our mission.",
              },
              {
                href: "/about/mission",
                title: "Our Mission",
                desc: "Discover what drives our goals.",
              },
            ]}
          />

          {/* Services */}
          <Dropdown
            label="Services"
            open={openMenu === "services"}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
            links={[
              {
                href: "/services/consulting",
                title: "Consulting",
                desc: "Expert advice tailored for your needs.",
              },
              {
                href: "/services/support",
                title: "Support",
                desc: "24/7 assistance to keep you running.",
              },
              {
                href: "/services/training",
                title: "Training",
                desc: "Learn and grow with our experts.",
              },
            ]}
          />

          {/* Static Links */}
          <Link href="/" className={`${linkHoverClass} text-lg font-medium`}>
            Price
          </Link>
          <Link href="/" className={`${linkHoverClass} text-lg font-medium`}>
            Contact Us
          </Link>
        </div>

        {/* Actions */}
        <div className="flex space-x-6 items-center">
          <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black">
            <Link href="/">Get Started</Link>
          </div>
          <div className="md:mt-2 cursor-pointer">
            <DarkMode defaultTheme={theme} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function Dropdown({ label, open, onMouseEnter, onMouseLeave, links }) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href="#"
        className="hover:underline hover:decoration-solid hover:text-[#ffcc00] flex items-center space-x-2 text-lg font-medium"
      >
        {label} <ChevronDown className="w-5 h-5" />
      </Link>
      {open && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-80 p-6 z-10 flex-col">
          <ul className="space-y-4">
            {links.map(({ href, title, desc }, idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  className="block text-gray-800 hover:text-[#ffcc00] text-lg font-medium"
                >
                  {title}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
