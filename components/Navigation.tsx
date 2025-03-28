"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const links = [
  { href: "/", label: "HOME" },
  // { href: "/about", label: "ABOUT" },
  { href: "/ui-blocks", label: "UI BLOCKS" },
  { href: "/templates", label: "TEMPLATES" },
  { href: "/sign-in", label: "SIGN IN" },

  // { href: "/testimonials", label: "TESTIMONIALS" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 `}
    >
      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex items-center justify-center border border-[#D9D9D9]/15 rounded-md px-6 py-3 bg-transparent ${
          isScrolled ? "backdrop-blur-sm" : ""
        }`}
      >
        <ul className="flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold text-white hover:text-yellow-200 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/get-full-access"
              className="inline-block p-2 rounded-md text-xs font-semibold bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] transition-colors duration-200"
            >
              GET FULL ACCESS
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex justify-end">
        <HeadlessMenu as="div" className="relative">
          {({ open }) => (
            <>
              <HeadlessMenu.Button className="p-2 rounded-md text-white hover:bg-gray-800/50 transition-colors">
                {open ? (
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </HeadlessMenu.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <HeadlessMenu.Items
                  static
                  className="absolute right-0 mt-2 w-48 origin-top-right bg-black/90 backdrop-blur-md border border-white/20 rounded-md shadow-lg p-2"
                >
                  {links.map((link) => (
                    <HeadlessMenu.Item key={link.href}>
                      {({ active }) => (
                        <Link
                          href={link.href}
                          className={`block px-4 py-2 text-xs font-semibold rounded-md ${
                            active
                              ? "bg-white/10 text-yellow-200"
                              : "text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </HeadlessMenu.Item>
                  ))}
                </HeadlessMenu.Items>
              </Transition>
            </>
          )}
        </HeadlessMenu>
      </div>
    </nav>
  );
};

export default Navigation;
