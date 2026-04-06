"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Property List", href: "/" },
    { name: "Country", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4 lg:px-15 transition-all duration-300">
      <div
        className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out py-1 ${isScrolled ? "bg-white rounded-full shadow-md h-15 px-2 " : "bg-transparent"}`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center bg-white rounded-full shadow-sm transition-all duration-500 ease-in-out overflow-hidden ${
              isScrolled
                ? "w-0 h-0 opacity-0 border-0"
                : "w-12 h-12 opacity-100"
            }`}
          >
            <h6 className="text-lg font-bold text-black">GH</h6>
          </div>
          <h6
            className={`flex text-xl font-semibold ${isScrolled ? "text-black ml-3" : "text-white"}`}
          >
            Green<div className="text-primary">House</div>
          </h6>
        </div>

        <div
          className={`hidden lg:flex items-center p-1 transition-all duration-500 ease-in-out gap-2 ${
            isScrolled ? "bg-transparent" : "bg-white rounded-full shadow-sm"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-500 transition-colors bg-white rounded-full hover:bg-gray-100 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden p-5 lg:flex">
            Get Started
          </Button>

          <button
            className={`p-2 transition-colors rounded-md lg:hidden focus:outline-none ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={` mt-4 flex flex-col gap-4 p-6 bg-white shadow-xl lg:hidden rounded-2xl transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-base font-medium text-gray-600 transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Button variant="default" className="w-full py-6">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
