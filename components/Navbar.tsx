"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const links = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "ui",
    label: "UI Blocks",
    href: "/ui-blocks",
  },
  {
    id: "templates",
    label: "Templates",
    href: "/",
  },
  {
    id: "signin",
    label: "Sign In",
    href: "/sign-in",
  },
];

const Navbar = () => {
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
      className={`fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4`}
    >
      {/* Desktop Navigation */}
      <div
        className={`hidden items-center justify-center rounded-md border border-[#D9D9D9]/15 bg-transparent px-6 py-3 md:flex ${
          isScrolled ? "backdrop-blur-sm" : ""
        }`}
      >
        <ul className="flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold text-white uppercase transition-colors duration-200 hover:text-[#FFFFA9]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/get-full-access"
              className="inline-block rounded-md bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] p-2 text-xs font-semibold transition-colors duration-200"
            >
              GET FULL ACCESS
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="flex w-full justify-end md:hidden">
        <HeadlessMenu as="div" className="relative">
          {({ open }) => (
            <>
              <HeadlessMenu.Button className="rounded-md p-2 text-white transition-colors hover:bg-gray-800/50">
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
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md border border-white/20 bg-black/90 p-2 shadow-lg backdrop-blur-md"
                >
                  {links.map((link) => (
                    <HeadlessMenu.Item key={link.href}>
                      {({ active }) => (
                        <Link
                          href={link.href}
                          className={`block rounded-md px-4 py-2 text-xs font-semibold uppercase ${
                            active ? "bg-white/10 text-[#FFFFA9]" : "text-white"
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

export default Navbar;
