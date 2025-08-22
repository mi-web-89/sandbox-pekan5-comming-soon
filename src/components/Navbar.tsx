"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WatchIcon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center transition-all duration-300 
        ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-md text-gray-400"
            : "bg-white/5 backdrop-blur-lg text-white"
        }`}
    >
      <div className="flex flex-row gap-2 items-center text-2xl font-bold ">
        <WatchIcon /> Smartwatch
      </div>

      <ul className="flex space-x-8 text-sm">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
