"use client";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full absolute flex items-center justify-between py-6 px-6 md:px-16 z-20">
      {/* Logo */}
      <a href="#" className="font-extrabold text-2xl tracking-tight text-black dark:text-white mr-8" aria-label="DEVLOP.ME logo">
        DEVLOP.<span className="tracking-normal">ME</span>
      </a>
      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 items-center text-lg font-medium text-black dark:text-white">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:underline focus:underline focus:outline-none transition-all px-2 py-1 rounded">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Button
          rightIcon={<FaArrowRight />}
          className="border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors px-5 py-2 text-base font-semibold"
          aria-label="Start Project"
        >
          Start Project
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
} 